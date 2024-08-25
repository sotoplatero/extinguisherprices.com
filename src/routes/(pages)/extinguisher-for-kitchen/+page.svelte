<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    export let data

</script>  

<Page 
    products={data?.products || []} 
    title="Fire Extinguisher for Kitchen"
    description=""
    regexp={/\bkitchen|oil\b/i}
/>