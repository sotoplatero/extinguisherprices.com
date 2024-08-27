<script>
    import {page} from '$app/stores';
    import Products from '$lib/components/Products.svelte';

    export let data

    $:products = data?.products || []
</script>

<div class="my-8 space-y-4">
    <h1 class="text-xl font-bold mb-8">{$page.params.query}</h1>
    <Products {products} />
    <a href="/" class="btn">All Result &rarr;</a>
</div>