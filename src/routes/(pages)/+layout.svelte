<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';

</script>  

<svelte:head>
	<title>Fire Extinguishers Prices</title>
	<meta name="description" content="Comparison of all Fire Extinguisher on Amazon sorted by price." />
</svelte:head>


<Header />
<div class="mt-8">
    <slot />
</div>
<Footer />


