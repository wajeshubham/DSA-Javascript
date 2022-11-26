class LinkNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first?.value ?? null;
  }

  enqueue(value) {
    let newNode = new LinkNode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }

  isEmpty() {
    return !this.length;
  }

  print() {
    if (this.isEmpty()) return console.log("Queue is empty");
    let currentNode = this.first;
    process.stdout.write(`Queue starts <- `);

    while (currentNode) {
      process.stdout.write(`${currentNode.value} | `);
      currentNode = currentNode.next;
    }
    process.stdout.write(`Queue Ends`);

    console.log("\n");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.print();
console.log(queue.isEmpty());
