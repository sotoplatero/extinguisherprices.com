import { json, text } from '@sveltejs/kit';
import {commonParameters } from '$lib/amazon';
import amazonPaapi from 'amazon-paapi';
import type { RequestHandler } from '../$types';
import { redis } from '$lib/upstash';
import {updateProducts} from '$lib/utils/updateItem';
import { table } from '$lib/deta';

export async function GET({ request }) {

    const response = await table('metadata').get('ItemPage') 
    const ItemPage = response.value ?? 1

    console.log(ItemPage)

    let requestParameters = {
        Keywords: 'fire extinguisher',
        SearchIndex: 'ToolsAndHomeImprovement',
        ItemPage: ItemPage,
        BrowseNodeId: "13400621",
        Resources: [
          'Images.Primary.Medium',
          'ItemInfo.Title',
          "ItemInfo.TechnicalInfo",
          "ItemInfo.ProductInfo",
          "ItemInfo.ContentInfo",
          'Offers.Listings.Price',
          // 'Offers.Summaries.LowestPrice',
          "Offers.Listings.MerchantInfo",
          "BrowseNodeInfo.BrowseNodes.SalesRank"
        ],
    };    

    try {

        const searchItemsResponse = await amazonPaapi.SearchItems(commonParameters, requestParameters)

        const formatResponse = JSON.stringify(searchItemsResponse).replace(/exports/g,'')
        const searchResponse = JSON.parse(formatResponse)

        const items = searchResponse.SearchResult.Items.map(i => ({...i, key: i.ASIN}))

        // console.log(items)
        if (items.length > 0) {
            await table('metadata').put( ItemPage + 1, 'ItemPage') 
            
            await table('products').putMany(items) ?? []

        } else { 
            await table('metadata').put( 1, 'ItemPage') 
        }

        return new Response('OK');

    } catch (error) { 
        console.log(error); 
        return json({ error: error.message });
    }

	return new Response('OK');
}