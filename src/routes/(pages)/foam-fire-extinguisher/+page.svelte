<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    export let data

</script>  

<Page 
    products={data?.products || []} 
    title="Water Fire Extiguisher"
    description="Explore our top-rated fire extinguisher list at ABC Fire Extinguishers. Find reliable, high-quality options for every fire safety need."
    regexp={/\bfoam\b/}
/>