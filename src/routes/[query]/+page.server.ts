import { json, text, error } from '@sveltejs/kit';
import {commonParameters } from '$lib/amazon';
import amazonPaapi from 'amazon-paapi';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({params}) => {

    const {query} = params
    const keywords = query.replace(/-/g, ' ')

    let requestParameters = {
        Keywords: keywords,
        SearchIndex: 'ToolsAndHomeImprovement',
        // ItemPage: page,
        BrowseNodeId: "13400621",
        Resources: [
          'Images.Primary.Medium',
          'ItemInfo.Title',
          "ItemInfo.TechnicalInfo",
          "ItemInfo.ProductInfo",
          "ItemInfo.ContentInfo",
          "ItemInfo.Features",
          'Offers.Listings.Price',
          "Offers.Listings.MerchantInfo",
          "BrowseNodeInfo.BrowseNodes.SalesRank"
        ],
    };    

    try {

        const searchItemsResponse = await amazonPaapi.SearchItems(commonParameters, requestParameters)

        const formatResponse = JSON.stringify(searchItemsResponse).replace(/exports/g,'')
        const searchResponse = JSON.parse(formatResponse)

        const items = searchResponse.SearchResult.Items

        return { products: items };

    } catch (error) { 
        console.log(error); 
        return json({ error: error.message });
    }

	return { products: [] };
}