class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
          } else {
            currentNode.left = newNode;
            break;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          } else {
            currentNode.right = newNode;
            break;
          }
        }
      }
    }
    return this.root;
  }

  search(value) {
    if (!this.root) return false;
    if (this.root.value === value) return this.root;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  minValue(root = this.root) {
    if (!root.left) return root.value;
    else return this.minValue(root.left);
  }

  maxValue(root = this.root) {
    if (!root.right) return root.value;
    else return this.maxValue(root.right);
  }

  delete(value) {
    this.root = this.#remove(this.root, value);
  }

  #remove(root, value) {
    if (!root) return null;
    if (root.value > value) root.left = this.#remove(root.left, value);
    else if (root.value < value) root.right = this.#remove(root.right, value);
    else {
      if (!root.left && !root.right) {
        return null;
      } else if (root.left && !root.right) {
        return root.left;
      } else if (!root.left && root.right) {
        return root.right;
      }
      root.value = this.minValue(root.right);
      root.right = this.#remove(root.right, root.value);
    }
    return root;
  }
}

/**
 * @description helper method
 * @param {TreeNode} node
 */
const traverse = (node) => {
  let tree = { nodeValue: node?.value };
  if (node?.left) {
    tree.left = traverse(node?.left);
  } else {
    tree.left = null;
  }
  if (node?.right) {
    tree.right = traverse(node?.right);
  } else {
    tree.right = null;
  }
  return tree;
};

let binary = new BinarySearchTree();

binary.insert(9);
binary.insert(4);
binary.insert(6);
binary.insert(20);
binary.insert(170);
binary.insert(270);
binary.insert(15);
binary.insert(1);
binary.insert(0);

console.log(binary.maxValue());

binary.delete(9);
binary.delete(15);

console.log(traverse(binary.root));
