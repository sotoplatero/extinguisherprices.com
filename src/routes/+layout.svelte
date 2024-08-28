<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
</script>

<div class="w-full max-w-screen-lg mx-auto px-2">
    <Header />
    <main class="mt-10">
        <slot></slot>
    </main>
    <Footer />
</div>
