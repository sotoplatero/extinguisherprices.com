export const updateProducts = (baseArray, updatedArray) => {
    const property = 'ASIN';
  
    // Create a map from the baseArray to allow quick lookups
    const baseMap = new Map(
      baseArray.map(item => [item[property], item])
    );
  
    // Iterate over the updatedArray to either update or insert items
    updatedArray.forEach(item => {
      baseMap.set(item[property], item);
    });
  
    // Convert the map back to an array
    return Array.from(baseMap.values());
  };
  