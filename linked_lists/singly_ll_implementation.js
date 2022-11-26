class LinkNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    if (!this.head) {
      this.head = new LinkNode(value, null);
    } else {
      let next = this.head;
      this.head = new LinkNode(value, next);
    }
  }

  insertAtIndex(index, value) {
    if (index > this.size()) throw Error("Index is out of range");

    if (index === 0) {
      this.insertAtHead(value);
      return;
    }
    let currentNode = this.head;
    let ind = 0;
    while (currentNode) {
      if (ind === index - 1) {
        let newNode = new LinkNode(value, currentNode.next);
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
      ind++;
    }
  }

  size() {
    let currentNode = this.head;
    let ind = 0;
    while (currentNode) {
      currentNode = currentNode.next;
      ind++;
    }
    return ind;
  }

  removeAtIndex(index) {
    if (index > this.size() - 1) throw Error("Index is out of range");
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let ind = 0;
    while (currentNode) {
      if (ind === index - 1) {
        currentNode.next = currentNode.next.next;
        break;
      }
      currentNode = currentNode.next;
      ind++;
    }
  }

  print() {
    if (!this.head) return console.log("Linked list is empty");
    let currentNode = this.head;
    while (currentNode) {
      process.stdout.write(`${currentNode.value} ---> `);
      currentNode = currentNode.next;
    }
    console.log("\n");
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = temp;
    }
    this.head = prevNode;
  }

  isEmpty() {
    return this.size() <= 0;
  }
}

let linkedList = new LinkedList();

linkedList.insertAtHead(10);
linkedList.insertAtHead(20);
linkedList.insertAtHead(30);
linkedList.insertAtIndex(3, 70);
linkedList.insertAtIndex(2, 80);
linkedList.insertAtIndex(4, 90);

linkedList.print();

linkedList.reverse();

linkedList.print();
