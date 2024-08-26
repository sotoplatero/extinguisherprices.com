<script lang="ts">
    import Products from '$lib/components/Products.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    export let data

    // console.log(data)
    let q =''
    let minprice = ''
    let maxprice = ''
    let products = data?.products || []

    function formatPrice(price) {
        return parseFloat(price?.replace(/[^0-9.]/g,'') || 0)
    }

    $: products = data?.products
            .filter(product =>
                !/bracket|cable|cabinet|Gauges/i.test(product.ItemInfo?.Title?.DisplayValue) && 
                (new RegExp( q, "i")).test(product.ItemInfo?.Title?.DisplayValue)
            ).map( product => 
                ({ ...product, price: formatPrice(product.Offers?.Listings[0].Price.DisplayAmount)})
            ).filter(product => 
                product.price > 0
                // (!!minprice ? product.price >= parseInt(minprice) : true ) &&
                // (!!maxprice ? product.price <= parseInt(maxprice) : true )
            ).sort((a,b) => a.price - b.price )

    // $: console.dir(maxprice)
</script>  

<svelte:head>
	<title>Fire Extinguishers Prices</title>
	<meta name="description" content="Comparison of all Fire Extinguisher on Amazon sorted by price." />
</svelte:head>


<div class="my-8 space-y-4">
    <div class="flex flex-row items-end gap-2">
        <label for="q" class="">
            <div>Search</div>
            <input type="text" name="q" bind:value={q} class="input input-bordered rounded w-full sm:w-auto">
        </label>
        <!-- <div class="flex gap-2">
            <label for="minprice">
                <div>Min Price</div>
                <input type="text" name="minprice" bind:value={minprice} class="input input-bordered input-sm rounded w-   sm:w-20">
            </label>
            <label for="minprice">
                <div>Max Price</div>
                <input type="text" name="maxprice" bind:value={maxprice}  class="input input-bordered input-sm rounded w-1/2 sm:w-20">
            </label>
        </div> -->
        <button class="btn rounded">Search</button>
    </div>
    <Products {products} />

</div>



