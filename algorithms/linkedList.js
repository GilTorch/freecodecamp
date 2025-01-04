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
}