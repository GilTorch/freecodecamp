function pairwise(arr, arg) {

    const indices = []
    for(let i = 0; i < arr.length; i++){
        if(indices.includes(i)) continue;
        for(let j = 0; j < arr.length; j++){
            if(indices.includes(j) || i === j) continue;        
            if(arr[i]+arr[j] === arg){
                indices.push(i);
                indices.push(j);
                break;
            }

        }
    }

   if(indices.length === 0) return 0;
   return indices.reduce((a,b) => a + b);
}


function optimizedPairwise(arr, arg) {
    const usedIndices = new Set(); // Track used indices
    let sum = 0; // Store the sum of indices

    for (let i = 0; i < arr.length; i++) {
        if (usedIndices.has(i)) continue; // Skip already used indices

        for (let j = i + 1; j < arr.length; j++) { // Start j at i + 1
            if (usedIndices.has(j)) continue; // Skip already used indices

            if (arr[i] + arr[j] === arg) {
                sum += i + j; // Add indices to the sum
                usedIndices.add(i); // Mark indices as used
                usedIndices.add(j);
                break; // Move to the next `i` after finding a pair
            }
        }
    }

    return sum; // Return the sum of indices
}