class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  insertNodeIterative(value) {
    const newNode = new Node(value);
    if (!this.root) {
      return (this.root = newNode);
    }
    const queue = [this.root];

    while (queue.length > 0) {
      let current = queue.shift();

      if (current.left === null) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }
      // Check the left child: If the left child of the currentNode is null, this means the spot is
      //                       available for the new node. So, we insert the new node there.

      // Insert the node: After inserting the new node, there's no need to check any further nodes
      //                  or make additional changes because the insertion is complete.
      //                  At this point, the currentNode has its left child set to the new node,
      //                  so the task is done.

      // Return immediately: We exit the insert() method right after the insertion because our job is
      // done.We don’t need to continue traversing the tree since we’ve inserted the node in the
      // correct position.

      if (current.right === null) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  recursiveInsert(node, value) {
    if (!node) {
      return new Node(value);
    }
    if (!node.left) {
      node.left = this.recursiveInsert(node.left, value);
    } else if (!node.right) {
      node.right = this.recursiveInsert(node.right, value);
    } else {
      node.left = this.recursiveInsert(node.left, value);
    }
    return node;
  }

  insert(value) {
    this.root = this.recursiveInsert(this.root, value);
  }
  bfs() {
    const result = [];
    const queue = [this.root];

    if (this.isEmpty()) {
      return result;
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  search(value, node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }

    return this.search(value, node.left) || this.search(value, node.right);
  }
  isPowerOfTwo(n) {
    if (n <= 0) return false; // Powers of 2 are positive numbers

    for (let i = 0; 2 ** i <= n; i++) {
      if (2 ** i === n) {
        return true;
      }
    }
    return false;
  }

  // Given an integer array nums where the elements are sorted in ascending order,
  // convert it to a height-balanced binary search tree.
}
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree.bfs());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.height());
console.log(tree.countNodes());
