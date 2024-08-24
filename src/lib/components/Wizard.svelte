<script>
    let currentStep = 1;

    function goToStep(step) {
        currentStep = step;
    }

    function nextStep() {
        if (currentStep < 5) {
            currentStep += 1;
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep -= 1;
        }
    }
</script>

<div class="h-screen flex flex-col items-center justify-center mx-auto">

    <h1 class="text-3xl text-center font-bold mb-6">Fire Extinguisher Selection Wizard</h1>
    <form action="/wizard" class="w-full max-w-screen-sm mx-auto bg-base-100 p-6 rounded border border-gray-600">
        
        <!-- Steps -->
        <div class="step {currentStep === 1 ? 'block' : 'hidden'}">
            <h2 class="text-2xl font-semibold mb-4">1. What type of fires will you be dealing with?</h2>
            <!-- <p class="mb-4">Different fires require different types of extinguishers. Select the type of fire you most commonly encounter to ensure you choose the right extinguisher.</p> -->
            <div class="grid grid-cols-1 gap-3 mb-6">
                {#each [
                    { value: 'solid', label: 'Solid materials (wood, paper, textiles)', default: true },
                    { value: 'liquid', label: 'Flammable liquids (gasoline, oils, solvents)' },
                    { value: 'electrical', label: 'Electrical equipment (computers, appliances)' },
                    { value: 'cooking', label: 'Cooking oils and fats (kitchen fires)' }
                ] as { value, label, default: isDefault }}
                    <label class="flex items-center cursor-pointer px-4 py-3 border rounded border-gray-600 hover:bg-base-200">
                        <input type="radio" name="fireType" value="{value}" class="mr-4" checked={isDefault}>
                        <span class="text-lg">{label}</span>
                    </label>
                {/each}
            </div>
        </div>
    
        <div class="step {currentStep === 2 ? 'block' : 'hidden'}">
            <h2 class="text-2xl font-semibold mb-4">2. Where will you use the fire extinguisher?</h2>
            <!-- <p class="mb-4">The location where you plan to use the extinguisher will influence the type and size of extinguisher you need. Choose the location to help us narrow down the options.</p> -->
            <div class="grid grid-cols-1 gap-3 mb-6">
                {#each [
                    { value: 'home', label: 'Home', default: true },
                    { value: 'vehicle', label: 'Vehicle (car, truck, RV)' },
                    { value: 'office', label: 'Office or Workplace' },
                    { value: 'industrial', label: 'Industrial or Commercial' }
                ] as { value, label, default: isDefault }}
                    <label class="flex items-center cursor-pointer px-4 py-3 border rounded border-gray-600 hover:bg-base-200">
                        <input type="radio" name="location" value="{value}" class="mr-4" checked={isDefault}>
                        <span class="text-lg">{label}</span>
                    </label>
                {/each}
            </div>
        </div>
    
        <div class="step {currentStep === 3 ? 'block' : 'hidden'}">
            <h2 class="text-2xl font-semibold mb-4">3. Do you prefer a rechargeable or disposable extinguisher?</h2>
            <!-- <p class="mb-4">Rechargeable extinguishers are refillable and generally have a longer lifespan, while disposable extinguishers are used once and replaced. Choose based on your preference and usage frequency.</p> -->
            <div class="grid grid-cols-1 gap-3 mb-6">
                {#each [
                    { value: 'rechargeable', label: 'Rechargeable (refillable, long-term use)', default: true },
                    { value: 'disposable', label: 'Disposable (single-use, replaceable)' }
                ] as { value, label, default: isDefault }}
                    <label class="flex items-center cursor-pointer px-4 py-3 border rounded border-gray-600 hover:bg-base-200">
                        <input type="radio" name="type" value="{value}" class="mr-4" checked={isDefault}>
                        <span class="text-lg">{label}</span>
                    </label>
                {/each}
            </div>
        </div>
    
        <div class="step {currentStep === 4 ? 'block' : 'hidden'}">
            <h2 class="text-2xl font-semibold mb-4">4. What size do you need?</h2>
            <!-- <p class="mb-4">The size of the fire extinguisher should match the potential fire risk. Smaller extinguishers are portable and suited for minor fires, while larger ones are better for more significant risks.</p> -->
            <div class="grid grid-cols-1 gap-3 mb-6">
                {#each [
                    { value: 'small', label: 'Small (1-2 kg, portable)' },
                    { value: 'medium', label: 'Medium (2-4 kg)', default: true },
                    { value: 'large', label: 'Large (4+ kg, more coverage)' }
                ] as { value, label, default: isDefault }}
                    <label class="flex items-center cursor-pointer px-4 py-3 border rounded border-gray-600 hover:bg-base-200">
                        <input type="radio" name="size" value="{value}" class="mr-4" checked={isDefault}>
                        <span class="text-lg">{label}</span>
                    </label>
                {/each}
            </div>
        </div>
    
        <div class="step {currentStep === 5 ? 'block' : 'hidden'}">
            <h2 class="text-2xl font-semibold mb-4">5. What is your budget?</h2>
            <!-- <p class="mb-4">Your budget will help determine the best options available within your price range. Consider both the cost of the extinguisher and potential maintenance or refill costs.</p> -->
            <div class="grid grid-cols-1 gap-3 mb-6">
                {#each [
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: 'Between $50 and $100', default: true },
                    { value: 'over100', label: 'Over $100' }
                ] as { value, label, default: isDefault }}
                    <label class="flex items-center cursor-pointer px-4 py-2 border rounded border-gray-600 hover:bg-base-200">
                        <input type="radio" name="budget" value="{value}" class="mr-4" checked={isDefault}>
                        <span class="text-lg">{label}</span>
                    </label>
                {/each}
            </div>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="flex justify-between gap-4 mt-6">
            <a href="/" class="btn btn-link">Cancel</a>
            <div>
                <button class="btn" disabled={currentStep === 1} on:click={prevStep}>Previous</button>
                {#if currentStep < 5}
                <button class="btn btn-primary" on:click={nextStep}>Next</button>
                {/if}
                {#if currentStep == 5}
                
                <button class="btn btn-primary ">Finish</button>
                {/if}
            </div>
        </div>
    </form>
</div>

<style>
    .step {
        @apply h-[28rem] sm:h-72;
    }
</style>