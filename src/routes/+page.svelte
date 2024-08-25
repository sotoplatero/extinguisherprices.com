<script lang="ts">
    import Products from '$lib/components/Products.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    export let data

    // console.log(data)
    let q =''
    let products = data?.products || []

    $: if (q) {
        products = data?.products.filter(product => 
            !/bracket|cable|cabinet|Gauges/i.test(product.ItemInfo?.Title?.DisplayValue) && 
            product.ItemInfo?.Title?.DisplayValue.includes(q)
    
        )
    }

    // $: console.log(products)
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
            <input type="text" name="q" bind:value={q} class="input input-bordered">
        </label>
        <label for="minprice">
            <div>Min Price</div>
            <input type="text" name="minprice" class="input input-bordered w-20">
        </label>
        <label for="minprice">
            <div>Max Price</div>
            
            <input type="text" name="maxprice" class="input input-bordered w-20">
        </label>
        <button class="btn">Search</button>
    </div>
    <Products {products} />

</div>
<Footer />


