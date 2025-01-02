function bubbleSort(arr){

    let fullySortedIndex = arr.length - 1;

    while(fullySortedIndex > 0){
        for(let i = 0; i < fullySortedIndex; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
        fullySortedIndex--;
    }

    return arr;
}