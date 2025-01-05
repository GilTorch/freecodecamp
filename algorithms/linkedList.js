function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
       const nodeToAdd = new Node(element);
    
        if(this.size() === 0){
          head = nodeToAdd;
        } else {
          let currentNode = head;
  
          while(currentNode.next){
            currentNode = currentNode.next;
          }
    
          currentNode.next = new Node(element)
        }
    
    
        length = this.size() + 1;
      // Only change code above this line
    };

    function LinkedList() {
        var length = 0;
        var head = null;
      
        var Node = function(element){
          this.element = element;
          this.next = null;
        };
      
        this.size = function(){
          return length;
        };
      
        this.head = function(){
          return head;
        };
      
        this.add = function(element){
          var node = new Node(element);
          if(head === null){
              head = node;
          } else {
            var currentNode = head;
      
            while(currentNode.next){
              currentNode  = currentNode.next;
            }
      
            currentNode.next = node;
          }
      
          length++;
        };
      
        this.remove = function(element){
          // Only change code below this line
          if (head.element === element) {
            head = head.next;
            return length--;
          }
          let previous = head;
          while (previous) {
            let current = previous.next;
            if (current) { // makes sure we are not at end where current.next would be null
              if (current.element === element) {
                previous.next = current.next;
                return length--;
              }
            }
            previous = current;
          }
          // Only change code above this line
        };
      }
    
}