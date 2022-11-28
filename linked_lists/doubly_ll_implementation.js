class LinkNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    if (!this.head) {
      this.head = new LinkNode(value, null, null);
    } else {
      let newNode = new LinkNode(value, this.head, null);
      this.head.prev = newNode;
      this.head = newNode;
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
        let newNode = new LinkNode(value, currentNode.next, currentNode);
        currentNode.next = newNode;
        if (currentNode.next.next) {
          currentNode.next.next.prev = newNode;
        }
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
        if (currentNode.next) {
          currentNode.next.prev = currentNode;
        }
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
      console.log(
        `${currentNode.value} prev: ${currentNode.prev?.value}, next: ${currentNode.next?.value}  <---> `
      );
      currentNode = currentNode.next;
    }
    console.log("\n");
  }

  isEmpty() {
    return this.size() <= 0;
  }
}

let linkedList = new DoublyLinkedList();

linkedList.insertAtHead(10);
linkedList.insertAtHead(20);
linkedList.insertAtHead(30);

linkedList.insertAtIndex(1, "inserted");
linkedList.insertAtIndex(3, "new");

linkedList.removeAtIndex(3);

linkedList.print();
