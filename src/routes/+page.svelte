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
        return parseFloat(price?.replace(/\$/,'') || 0)
    }

    $: if (q || minprice || maxprice) {
        products = data?.products
            .filter(product => 
                !/bracket|cable|cabinet|Gauges/i.test(product.ItemInfo?.Title?.DisplayValue) && 
                product.ItemInfo?.Title?.DisplayValue.includes(q)
            ).filter(product => 
                !!minprice ? formatPrice(product.Offers?.Listings[0].Price.DisplayAmount) >= minprice : true 
            ).filter(product => {
                return  !!maxprice ? formatPrice(product.Offers?.Listings[0].Price.DisplayAmount) <= maxprice : true 
            })
    }

    // $: console.dir(maxprice)
</script>  

<svelte:head>
	<title>Fire Extinguishers Prices</title>
	<meta name="description" content="Comparison of all Fire Extinguisher on Amazon sorted by price." />
</svelte:head>


<Header />
<div class="my-8 space-y-4">
    <div class="flex items-end gap-2">
        <label for="q" class="">
            <div>Search</div>
            <input type="text" name="q" bind:value={q} class="input input-bordered input-sm rounded">
        </label>
        <label for="minprice">
            <div>Min Price</div>
            <input type="number" name="minprice" bind:value={minprice} class="input input-bordered input-sm rounded w-20">
        </label>
        <label for="minprice">
            <div>Max Price</div>
            
            <input type="number" name="maxprice" bind:value={maxprice}  class="input input-bordered input-sm rounded w-20">
        </label>
        <button class="btn btn-sm rounded">Search</button>
    </div>
    <Products {products} />

</div>
<Footer />


