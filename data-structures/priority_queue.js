function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(item){
      this.collection.push(item);
      this.collection.sort((item1, item2) => item1[1] - item2[1]);
    }
  
    this.dequeue = function(){
      return this.collection.shift()[0];
    }
  
    this.size = function() {
      return this.collection.length;
    }
  
    this.front = function(){
      return this.collection[0][0];
    }
  
    this.isEmpty = function(){
      return this.size() === 0;
    }
    // Only change code above this line
  }