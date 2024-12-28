// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/learn-how-a-stack-works
function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.push = function (item){
      collection.push(item);
    }
  
    this.pop = function (item){
      return collection.pop();
    }
  
    this.peek = function (){
      return collection[collection.length - 1];
    }
  
    this.isEmpty = function (){
      return collection.length === 0;
    }
  
    this.clear = function(){
      collection = [];
    }
    // Only change code above this line
  }