class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    isEmty(){
        return this.items.length == 0;
    }
    peek(){
        return this.items[this.items.length - 1];
    }   

}
const stack = new Stack()
console.log(stack.push(1))
console.log(stack.isEmty())
console.log(stack.peek())
console.log(stack.pop())

