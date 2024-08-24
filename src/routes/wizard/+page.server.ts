import type { PageLoad } from './$types';
import { json, text, error } from '@sveltejs/kit';
import {commonParameters } from '$lib/amazon';
import amazonPaapi from 'amazon-paapi';

export const load: PageLoad = async ({ request }) => {


    let requestParameters = {
        Keywords: 'fire extinguisher',
        SearchIndex: 'ToolsAndHomeImprovement',
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

        const items = searchResponse.SearchResult.Items.map(i => ({...i, key: i.ASIN})) ?? []

        return { items };

    } catch (error) { 
        console.log(error); 
        return json({ error: error.message });
    }

	return new Response('OK');
}