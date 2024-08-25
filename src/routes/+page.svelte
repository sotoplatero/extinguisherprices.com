<script lang="ts">
    export let data

    // console.log(data)

    let products = data?.products
</script>  

<svelte:head>
	<title>Fire Extinguishers Prices</title>
	<meta name="description" content="Comparison of all Fire Extinguisher on Amazon sorted by price." />
</svelte:head>


<header class="border-b py-2">
    <div class="flex justify-between items-center w-full max-w-screen-lg mx-auto">
        <h1 class="text-lg leading-snug font-bold">🔥 Fire Extinguishers</h1>
        <a href="/wizard" class="btn btn-primary font-bold text-white">Help me Select</a>
    </div>
</header>

<div class="mt-8">
    
    <ul class="space-y-8">
        {#each products as product}
            <li class="flex items-center justify-between gap-4 group">
                <div class="flex items-center gap-4">
                    <a href="{product.DetailPageURL}" target="_actions" class="border border-gray-400 rounded flex-none size-20">
                        <img src="{product.Images.Primary.Medium.URL}" alt="" class="p-2 size-20 group-hover:scale-110 transition" loading="lazy">
                    </a>
                    <div>
                        <a href="{product.DetailPageURL}" class="line-clamp-2 pr-10" target="_blank">{ product.ItemInfo.Title.DisplayValue}</a>
                        <!-- {JSON.stringify(product.Offers.Listings[0])} -->
                        <div class="text-sm">{product.Offers?.Listings[0].MerchantInfo?.FeedbackRating}⭐  {product.Offers?.Listings[0].MerchantInfo?.FeedbackCount} ratings</div>
                        <!-- <div>{JSON.stringify(product.BrowseNodeInfo)}</div> -->
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-semibold">{product.Offers?.Listings[0].Price.DisplayAmount}</div>
                    <!-- <div class="text-sm">{product.Offers.Listings[0].Price.Savings?.DisplayAmount ?? ''}</div> -->
                </div>
            </li>    
            <!-- content here -->
        {/each}
    </ul>
</div>

<footer class="py-8 text-center">
    <p>This site is powered by paid affiliate links.</p>
</footer>

