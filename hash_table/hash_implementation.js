class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   *
   * @param {string} key
   * @param {any} value
   * @timeComplexity O(1)
   */
  set(key, value) {
    let address = this.#hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length === 1) {
        keys.push(this.data[i][0][0]);
      } else if (this.data[i] && this.data.length > 1) {
        // condition for hash collision
        this.data[i].map((item) => {
          keys.push(item[0]);
        });
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length === 1) {
        values.push(this.data[i][0][1]);
      } else if (this.data[i] && this.data.length > 1) {
        // condition for hash collision
        this.data[i].map((item) => {
          values.push(item[1]);
        });
      }
    }
    return values;
  }
  /**
   *
   * @param {string} key
   * @timeComplexity O(1) If we don't have hash collision (https://en.wikipedia.org/wiki/Hash_collision)
   */
  get(key) {
    let address = this.#hash(key); // we can ignore the hash time complexity as it is implemented internally/privately
    const currentBucket = this.data[address];
    if (!currentBucket) return undefined;
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) return currentBucket[i][1];
    }
    return undefined;
  }

  /**
   *
   * @param {string} key
   * @timeComplexity O(n) // internal function
   */
  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const hashTable = new HashTable(1000);

hashTable.set("grapes", 40);
hashTable.set("apple", 90);
hashTable.set("banana", 30);
hashTable.set("strawberry", 150);
let val = hashTable.keys();
console.log(val);
