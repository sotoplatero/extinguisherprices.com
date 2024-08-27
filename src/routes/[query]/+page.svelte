<script>
    import {page} from '$app/stores';
    import Products from '$lib/components/Products.svelte';

    export let data

    $:products = data?.products || []
</script>


<svelte:head>
	<title>{$page.params.query}</title>
	<meta name="description" content="Compare top {$page.params.query} on Amazon with real-time prices and reviews. Discover deals and make informed buying decisions with our advanced search tool." />
</svelte:head>


<div class="my-8 space-y-4">
    <h1 class="text-xl font-bold mb-8">{$page.params.query}</h1>
    <Products {products} />
    <a href="/" class="btn">All Result &rarr;</a>
</div>