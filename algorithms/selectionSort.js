function selectionSort(array) {
    // Only change code below this line

    let sortedBoundary = 0; 

    while(sortedBoundary < array.length){


        let minIndex = sortedBoundary; 
        let min = array[sortedBoundary];

        for(let i = sortedBoundary; i < array.length;i++){
            if(array[i] < min){
                minIndex = i;
                min = array[i];
            }
        }

      

        [array[minIndex], array[sortedBoundary]] = [array[sortedBoundary], array[minIndex]]

        sortedBoundary++;
    }

    return array;
    // Only change code above this line
  }