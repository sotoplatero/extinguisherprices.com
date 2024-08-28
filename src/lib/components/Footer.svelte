<script>
</script>
<footer class="mb-10">
    <hr class="my-10">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
        {#each [
            'CO2 Fire Extinguisher',
            'ABC Fire Extinguisher',
            'Water Fire Extinguisher',	
            'Foam Fire Extinguisher',	
            'Wet Chemical Fire Extinguisher',	
            'Dry Powder Fire Extinguisher',	
            'Automatic Fire Extinguisher',	
            'Portable Fire Extinguisher',
            'Fire Extinguisher for Home',	
            'Fire Extinguisher for Car',	
            'Fire Extinguisher for Kitchen',
            'Fire Extinguisher for Office',	
            'Fire Extinguisher for Boat',	
            'Fire Extinguisher with Mounting Bracket',
            'Rechargeable Fire Extinguisher',
            'Fire Extinguisher for Garage',
            'Marine Fire Extinguisher',
            'Commercial Fire Extinguisher',
            'Fire Extinguisher for Trucks',
            'Fire Extinguisher for Warehouse'	
        ] as page}
            <a href="/{page.toLowerCase().replace(/\s/g,'-')}" class="link leading-tight">{page}</a>
        {/each}
    </div>
    <p class="text-center mt-8">This site is powered by paid affiliate links.</p>
</footer>