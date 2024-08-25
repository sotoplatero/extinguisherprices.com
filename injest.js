import amazonPaapi from 'amazon-paapi';
import { Deta } from 'deta'; // import Deta

const deta = Deta(process.env.DETA_PROJECT_KEY);
const table = (name) => deta.Base(name);

export const commonParameters = {
    AccessKey: process.env.AMAZON_ACCESS_KEY,
    SecretKey: process.env.AMAZON_SECRET_KEY,
    PartnerTag: process.env.AMAZON_ASSOCIATE_TAG, 
    PartnerType: 'Associates', 
    Marketplace: 'www.amazon.com', 
};

const keywords = [
    "Fire Extinguisher",
    "ABC Fire Extinguisher",
    "CO2 Fire Extinguisher",
    "Class K Fire Extinguisher",
    "Dry Chemical Fire Extinguisher",
    "Foam Fire Extinguisher",
    "Water Fire Extinguisher",
    "Halon Fire Extinguisher",
    "dry powder Fire Extinguisher",
    "spray Fire Extinguisher",
    "Kitchen Fire Extinguisher",
    "Commercial Fire Extinguisher",
    "Home Fire Extinguisher",
    "Portable Fire Extinguisher",
    "Vehicle Fire Extinguisher",
    "Marine Fire Extinguisher",
    "Industrial Fire Extinguisher",
    "Automatic Fire Extinguisher",
    "Lithium Battery Fire Extinguisher"
];

// Function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function injest() {
    for (const keyword of keywords) {  // Use for...of loop to handle async operations
        for (let i = 1; i <= 10; i++) {
    
            let requestParameters = {
                Keywords: keyword,
                SearchIndex: 'ToolsAndHomeImprovement',
                ItemPage: i,
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
                const searchItemsResponse = await amazonPaapi.SearchItems(commonParameters, requestParameters);
        
                const formatResponse = JSON.stringify(searchItemsResponse).replace(/exports/g, '');
                const searchResponse = JSON.parse(formatResponse);
        
                const items = searchResponse.SearchResult.Items.map(i => ({...i, key: i.ASIN}));
        
                if (items.length > 0) {
                    // console.dir(items[0], { depth: null });
                    await table('products').putMany(items);
                } else {
                    break;
                }
                console.log(keyword, i);
                await delay(1000);
                
            } catch (error) { 
                console.error(error); 
            }
        }
    }
}

// Call the injest function
injest().catch(console.error);
