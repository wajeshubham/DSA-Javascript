class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  valueAtIndex(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    let poppedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return poppedItem;
  }

  deleteAtIndex(index) {
    if (index >= this.length) {
      throw new RangeError("Index is out of range");
    }
    this.#unShiftItems(index);
    this.length--;
  }

  replaceAtIndex(index, value) {
    if (index > this.length) {
      throw new RangeError("Index is out of range");
    }
    this.data[index] = value;
  }

  insertAtIndex(index, value) {
    if (index > this.length) {
      throw new RangeError("Index is out of range");
    }
    this.#shiftItems(index);
    // after shifting we have same item at the index and at the index + 1
    // So, now we can assign a new value to the index
    this.data[index] = value;
    this.length++;
  }

  #shiftItems(index) {
    for (let i = this.length; i > index; i--) {
      // start at the end of the array
      // assign value of previous key to the current key
      // so we shifted the array to one place
      this.data[i] = this.data[i - 1];
    }
  }

  #unShiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // start at the index from where we have to shift
      // assign value of next key to the current key
      this.data[i] = this.data[i + 1];
    }
    // Because from above operation we will have out last item shifted to the second last
    // We can delete the redundant last item
    delete this.data[this.length - 1];
  }

  print() {
    return Object.values(this.data);
  }
}

const customArray = new CustomArray();

customArray.push(1);
customArray.push(2);
customArray.push(3);
customArray.push(4);

customArray.insertAtIndex(1, "inserted1");
customArray.insertAtIndex(3, "inserted3");

customArray.replaceAtIndex(1, "replaced1");

console.log(customArray.print());
