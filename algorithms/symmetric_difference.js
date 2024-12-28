function sym(...args) {

    if(args.length === 2){
       let array1 = args[0];
       let array2 = args[1];
       let difference = [];
       array1.forEach((element) => {
           if(!array2.includes(element)){
               difference.push(element);
           }
       })
       array2.forEach((element) => {
           if(!array1.includes(element)){
               difference.push(element);
           }
       })
       return Array.from(new Set(difference));
    } else {
       const lastArray = args[args.length - 1];
       const newArgs = args.slice(0, args.length - 1);
       return sym(sym(...newArgs), lastArray)
    }
 }


 // solution with reduce

 function sym1() {
    const args = [];
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    function symDiff(arrayOne, arrayTwo) {
      const result = [];
  
      arrayOne.forEach(function (item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach(function (item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  
    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
  }