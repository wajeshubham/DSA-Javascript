class LinkNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new LinkNode(val, this.top);
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return "Nothing in there";
    let poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedNode.value;
  }

  peek() {
    return this.top?.value ?? null;
  }

  isEmpty() {
    return !this.length;
  }

  print() {
    let currentNode = this.top;
    while (currentNode) {
      console.log("| " + currentNode.value + " |");
      console.log("------");
      currentNode = currentNode.next;
    }
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.pop());
console.log(stack.pop());

stack.print();
