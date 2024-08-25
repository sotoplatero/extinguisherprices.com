<script>
    export let products = []
</script>

<ul class="space-y-4">
    {#each products as product}
        <li class="flex items-center justify-between gap-4 group">
            <div class="flex items-center gap-4">
                <a href="{product.DetailPageURL}" target="_actions" class="border border-gray-400 rounded flex-none size-20">
                    <img src="{product.Images.Primary.Medium.URL}" alt="" class="h-full p-2 size-20 group-hover:scale-110 transition" loading="lazy">
                </a>
                <a href="{product.DetailPageURL}" target="_blank" class="text-gray-800/80 hover:text-gray-900 leading-5">
                    <div class="font-semibold">{product.Offers?.Listings[0].Price.DisplayAmount}</div>
                    <p>{ product.ItemInfo.Title.DisplayValue}</p>
                    <!-- {JSON.stringify(product.Offers.Listings[0])} -->
                    <div class="text-sm">{product.Offers?.Listings[0].MerchantInfo?.FeedbackRating}⭐  {product.Offers?.Listings[0].MerchantInfo?.FeedbackCount} ratings</div>
                    <!-- <div>{JSON.stringify(product.BrowseNodeInfo)}</div> -->
                </a>
            </div>
            <!-- <div class="text-right">
                <div class="font-semibold">{product.Offers?.Listings[0].Price.DisplayAmount}</div>
            </div> -->
        </li>    
        <!-- content here -->
    {/each}
</ul>