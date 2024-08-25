<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    export let data

</script>  

<Page 
    products={data?.products || []} 
    title="Car Fire Extinguisher"
    description=""
    regexp={/\bcar\b/i}
/>