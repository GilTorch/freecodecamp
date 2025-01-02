var Map = function() {
    this.collection = {};
    // Only change code below this line
    this.add = function(key, value){
      this.collection[key] = value;
    }
  
    this.remove = function(key, value){
      if(this.collection[key] === value){
       delete this.collection[key]
      }
    }
  
    this.get = function(key) {
      return this.collection[key];
    }
  
    this.has = function(key){
      return Boolean(this.collection[key])
    }
  
    this.values = function(){
      return Object.values(this.collection);
    }
  
    this.size = function(){
      return this.values().length;
    }
  
    this.clear = function(){
       this.collection = {};
    }
    // Only change code above this line
  };

 const map = new Map()
 map.add("hey",1);
 map.clear();
 map.add("hey",1);

 console.log(map.collection)