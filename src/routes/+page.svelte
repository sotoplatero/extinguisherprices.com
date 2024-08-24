<script lang="ts">
    export let data

    // console.log(data)

    let products = data?.products
</script>  

<svelte:head>
	<title>Fire Extinguisher Prices</title>
	<meta name="description" content="Comparison of all Fire Extinguisher on Amazon sorted by price." />
</svelte:head>

<section class="flex justify-between    py-4 border-b">
    <h1 class="text-lg leading-snug font-bold">🔥 Fire Extinguishers</h1>
    <a href="/about">About</a>
    <!-- <a href="https://amzn.to/3WGMtja" target="_blank" class="mt-6 font-bold p-3 bg-blue-500 text-white rounded">Buy on Amazon</a> -->
</section>

<div class="mt-8">

    <ul class="space-y-8">
        {#each products as product}
            <li class="flex items-center justify-between gap-4 group">
                <div class="flex items-center gap-4">
                    <div class="border border-gray-400 rounded flex-none size-20">
                        <img src="{product.Images.Primary.Medium.URL}" alt="" class="p-2 size-20 group-hover:scale-110 transition" loading="lazy">
                    </div>
                    <div>
                        <a href="{product.DetailPageURL}" class="line-clamp-2" target="_blank">{ product.ItemInfo.Title.DisplayValue}</a>
                        <!-- {JSON.stringify(product.Offers.Listings[0])} -->
                        <div class="text-sm">{product.Offers.Listings[0].MerchantInfo?.FeedbackRating}⭐ - {product.Offers.Listings[0].MerchantInfo?.FeedbackCount} ratings</div>
                        <!-- <div>{JSON.stringify(product.BrowseNodeInfo)}</div> -->
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-semibold">{product.Offers.Listings[0].Price.DisplayAmount}</div>
                    <!-- <div class="text-sm">{product.Offers.Listings[0].Price.Savings?.DisplayAmount ?? ''}</div> -->
                </div>
            </li>    
            <!-- content here -->
        {/each}
    </ul>
</div>
    
<p>As an Amazon Associate I earn from qualifying purchases</p>

<style>
    a {
        @apply text-blue-600;
    }
</style>