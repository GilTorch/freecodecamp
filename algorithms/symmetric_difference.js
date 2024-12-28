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
       // console.log(args.length)

       const lastArray = args[args.length - 1];
       const newArgs = args.slice(0, args.length - 1);
       
       return sym(sym(...newArgs), lastArray)
    }
 }