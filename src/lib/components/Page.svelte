<script lang="ts">
    import Products from '$lib/components/Products.svelte';

    export let title = "Fire Extinguishers Prices";
    export let description = "Comparison of all Fire Extinguisher on Amazon sorted by price.";
    export let regexp = /\bABC\b/;
    export let products = [];

    $: products = products.filter( product =>  
            regexp.test(product.ItemInfo?.Title?.DisplayValue) || regexp.test(product.ItemInfo?.Features?.DisplayValues)
        )

    $: console.log(products[0])

</script> 

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}" />
</svelte:head>

<h1 class="font-bold mb-4">{title}</h1>
<Products {products} />