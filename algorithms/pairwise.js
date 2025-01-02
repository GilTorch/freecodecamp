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