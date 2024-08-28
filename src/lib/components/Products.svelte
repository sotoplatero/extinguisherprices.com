<script>
    export let products = []
</script>

<ul class="space-y-8">
    {#each products as product}
        <li class="flex items-center justify-between gap-4 group overflow-hidden">
            <div class="flex items-center gap-2 sm:gap-4 break-words">
                <a href="{product.DetailPageURL}" target="_actions" class="inline-block border-gray-400 rounded flex-none size-24 ">
                    <img src="{product.Images.Primary.Medium.URL}" alt="" class="h-full group-hover:scale-110 transition bg-gray-30" loading="lazy">
                </a>
                <a href="{product.DetailPageURL}" target="_blank" class="text-gray-800/80 hover:text-gray-900 leading-5">
                    <div class="flex items-center gap-4">
                        <div class="font-semibold">{product.Offers?.Listings[0].Price.DisplayAmount}</div>
                        <div class="">{product.Offers?.Listings[0].MerchantInfo?.FeedbackRating}⭐  {product.Offers?.Listings[0].MerchantInfo?.FeedbackCount} ratings</div>
                    </div>
                    <div class="break-words">{ product.ItemInfo.Title.DisplayValue} </div>
                    <!-- {JSON.stringify(product.Offers.Listings[0])} -->
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