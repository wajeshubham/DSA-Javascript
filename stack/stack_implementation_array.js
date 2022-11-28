class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(val) {
    this.data.push(val);
    this.length++;
  }

  pop() {
    let poppedItem = this.data[this.length - 1];
    this.data.splice(this.length - 1, 1);
    this.length--;
    return poppedItem;
  }

  peek() {
    return this.data[this.length - 1];
  }

  isEmpty() {
    return !this.length;
  }

  print() {
    for (let i = this.length - 1; i >= 0; i--) {
      console.log("| " + this.data[i] + " |");
      console.log("------");
    }
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();
stack.pop();
stack.pop();

stack.print();
console.log(stack.isEmpty());
