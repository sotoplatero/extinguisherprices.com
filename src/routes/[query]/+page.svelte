<script>
    import {page} from '$app/stores';
    import Products from '$lib/components/Products.svelte';

    export let data

    $: products = data?.products || []
    $: title = $page.params.query.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

</script>


<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Compare top {title} on Amazon with real-time prices and reviews. Discover deals and make informed buying decisions with our advanced search tool." />
</svelte:head>


<div class="my-8 space-y-4">
    <h1 class="text-xl font-bold mb-8">{title}</h1>
    <Products {products} />
    <a href="/" class="btn">All Result &rarr;</a>
</div>