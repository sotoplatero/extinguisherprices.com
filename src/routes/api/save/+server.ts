import { json, text, error } from '@sveltejs/kit';
import {commonParameters } from '$lib/amazon';
import amazonPaapi from 'amazon-paapi';
import type { RequestHandler } from '../$types';
import { table } from '$lib/deta';

export async function GET({url}): Promise<Response> {

    // if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    //     return error(401,'Unauthorized', )
    // }    
    const q = url.searchParams.get('q')
    const page = parseInt(url.searchParams.get('page') ?? '1')

    if (!q) {
        return error(400, 'Bad Request') 
    }

    let requestParameters = {
        Keywords: q,
        SearchIndex: 'ToolsAndHomeImprovement',
        ItemPage: page,
        BrowseNodeId: "13400621",
        Resources: [
          'Images.Primary.Medium',
          'ItemInfo.Title',
          "ItemInfo.TechnicalInfo",
          "ItemInfo.ProductInfo",
          "ItemInfo.ContentInfo",
          'Offers.Listings.Price',
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
            await table('products').putMany(items)
        }
        
        return new Response('OK');

    } catch (error) { 
        console.log(error); 
        return json({ error: error.message });
    }

	return new Response('OK');
}