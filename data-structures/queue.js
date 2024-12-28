// Exercise: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class

function Queue() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function (element) {
      collection.push(element);
    } 
  
    this.dequeue = function (){
      return collection.shift();
    }
  
    this.size = function (){
      return collection.length;
    }
  
    this.isEmpty = function() {
      return collection.length === 0;
    }
  
    this.front = function() {
      return collection[0]
    }
    // Only change code above this line
  }