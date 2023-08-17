class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    return this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const queue = new Queue();
print(queue.enqueue(10));
print(queue.enqueue(20));
print(queue.enqueue(30));
print(queue.isEmpty());
print(queue.dequeue());
