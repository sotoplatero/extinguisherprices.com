<footer class="mb-10">
    <hr class="my-10">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
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
        ] as page}
            <a href="/{encodeURIComponent(page)}" class="link ">{page}</a>
             <!-- content here -->
        {/each}
    </div>
    <p class="text-center mt-6">This site is powered by paid affiliate links.</p>
</footer>