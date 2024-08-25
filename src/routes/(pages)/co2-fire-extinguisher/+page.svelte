<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    export let data

</script>  

<Page 
    products={data?.products || []} 
    title="CO2 Fire Extinguisher"
    description=""
    regexp={/\bco2|Dry Powder\b/i}
/>