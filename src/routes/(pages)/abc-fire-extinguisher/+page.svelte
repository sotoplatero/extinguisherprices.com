<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    export let data
</script>  

<Page 
    products={data?.products || []} 
    title="ABC Fire Extinguisher"
    description=""
    regexp={/\bABC\b/}
/>