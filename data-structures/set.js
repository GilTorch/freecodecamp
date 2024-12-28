class Set {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.values(this.dictionary);
    }
  
    // Only change code below this line
  
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = element;
        this.length++;
        return true;
      } else {
        return false;
      }
    }
  
     remove(element) {
      if (this.has(element)) {
        delete this.dictionary[element];
        this.length--;
        return true;
      } else {
        return false;
      }
    }
  
    size() {
      return this.length;
    }

    union(set) {
        const unionSet = new Set();
        const setAValues = set.values();
        const setBValues = this.values();
        [...setAValues, ...setBValues].forEach((element) => unionSet.add(element))
        return unionSet;
     }

     intersection(set){

        const setAValues = this.values();
        const setBValues = set.values();
        const intersectionSet = new Set();
    
        setAValues.forEach((setAValue) => {
          if(setBValues.includes(setAValue)){
            intersectionSet.add(setAValue);
          }
        })
    
        return intersectionSet;
    
      }
     
    
    // Only change code above this line
  }