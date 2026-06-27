//Finding one or more base cases
//Callign the same function on the left subtree
//Calling the same fucntion on the right subtree
//Joing the results

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    } else {
      console.log("value already exists", root.value);
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root = this.root, result = []) {
    if (root) {
      result.push(root.value);
      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }
    return result;
  }

  inOrder(root = this.root, result = []) {
    if (root) {
      this.inOrder(root.left, result);
      result.push(root.value);
      this.inOrder(root.right, result);
    }
    return result;
  }

  postOrder(root = this.root, result = []) {
    if (root) {
      this.postOrder(root.left, result);
      this.postOrder(root.right, result);
      result.push(root.value);
    }
    return result;
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

  min(root) {
    if (this.isEmpty()) {
      throw new Error("The tree is empty");
    }
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (this.isEmpty()) {
      throw new Error("The tree is empty");
    }
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  findMaxWithOutRecursion() {
    let current = this.root;

    while (current !== null && current.right !== null) {
      current = current.right;
    }

    return current.value;
  }
  findMinWithOutRecursion() {
    let current = this.root;

    while (current !== null && current.left !== null) {
      current = current.left;
    }

    return current.value;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  // Helper method to delete the node
  deleteNode(root, value) {
    if (root === null) {
      return root; // Base case: node not found
    }
    // Search for the node to delete
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value); // Go left
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value); // Go right
    } else {
      // Node to delete found
      if (!root.left && !root.right) {
        // Case 1: No children (leaf node)
        return null;
      }
      if (!root.left) {
        // Case 2: One child (right child)
        return root.right;
      } else if (!root.right) {
        // Case 3: One child (left child)
        return root.left;
      }
      // Case 4: Two children
      // Find the in-order successor (smallest in the right subtree)
      const minNode = this.min(root.right);
      // Replace the value of the current node with the value of the in-order successor
      root.value = minNode.value;
      // Delete the in-order successor
      root.right = this.deleteNode(root.right, minNode.value);
    }

    return root;
  }

  isValidBst(root = this.root, minValue = -Infinity, maxValue = Infinity) {
    if (root === null) {
      return true;
    }

    if (root.value <= minValue || root.value >= maxValue) {
      return false;
    }

    const leftIsValid = this.isValidBst(root.left, minValue, root.value);
    const rightIsValid = this.isValidBst(root.right, root.value, maxValue);

    return leftIsValid && rightIsValid;
  }
  isValidBstManual(root) {
    if (!root) return true; // If the root is null, it's a valid BST (empty tree)

    // Create a queue to hold the nodes along with their valid range (min, max)
    const queue = [{ node: root, minValue: -Infinity, maxValue: Infinity }];

    while (queue.length > 0) {
      const { node, minValue, maxValue } = queue.shift();
      // Check if the current node's value is within the allowed range
      if (node.value <= minValue || node.value >= maxValue) {
        return false;
      }

      if (node.left) {
        queue.push({
          node: node.left,
          minValue: minValue,
          maxValue: node.value,
        });
      }

      if (node.right) {
        queue.push({
          node: node.right,
          minValue: node.value,
          maxValue: maxValue,
        });
      }
    }

    return true;
  }

  closestValue(root, target) {
    let closest = root.value;

    function updateClosest(node) {
      // depending on whether the target is smaller or larger than the current node's value,
      // the function moves either left or right in the tree:

      if (Math.abs(node.value - target) < Math.abs(closest - target)) {
        closest = node.value;
      }
    }
    // Initial:
    //        10
    //       /  \
    //      5    15
    //     / \   / \
    //    2   8 12  20

    // Target = 13

    // Step 1: Start at 10
    //    - target (13) > 10 → move right to 15

    // Step 2: Now at 15
    //    - target (13) < 15 → move left to 12

    // Step 3: Now at 12
    //    - target (13) > 12 → move right, but it's null (end)

    // Closest value = 12

    while (root) {
      updateClosest(root);
      if (target < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }

    return closest;
  }

  heightIterative() {
    const queue = [{ node: this.root, depth: 0 }];

    let max = -1;
    while (queue.length > 0) {
      const { node, depth } = queue.shift();

      max = Math.max(max, depth);

      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }

    return max;
  }
  //recursive Approach = maximum depth or height
  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Depth is the number of edges from the root to the node.
  // Height is the number of edges from a node to its deepest leaf.

  isbothTreeIdentical(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length > 0 && queue2.length > 0) {
      const node1 = queue1.shift();
      const node2 = queue2.shift();

      if (node1.value !== node2.value) return false;

      if (node1.left && node2.left) {
        queue1.push(node1.left);
        queue2.push(node2.left);
      } else if (!node1.left || !node2.left) {
        return false; // One tree has a left child but the other doesn't
      }

      if (node1.right && node2.right) {
        queue1.push(node1.right);
        queue2.push(node2.right);
      } else if (!node1.right || !node2.right) {
        return false;
      }
    }
    return queue1.length === 0 && queue2.length === 0;
  }

  invertBinarySearchTree() {
    const queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();

      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  isSubTree(subRoot) {
    if (!this.root) return false;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (this.isbothTreeIdentical(node, subRoot)) {
        return true;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return false;
  }
  kthSmallest(root = this.root, k, result = []) {
    if (root) {
      this.kthSmallest(root.left, k, result);
      result.push(root.value);
      this.kthSmallest(root.right, k, result);
    }
    return result[k - 1];
  }

  secLargestBFS() {
    if (this.isEmpty()) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode) {
        if (currentNode.value > largest) {
          secondLargest = largest;
          largest = currentNode.value;
        } else if (
          currentNode.value > secondLargest &&
          currentNode.value !== largest
        ) {
          secondLargest = currentNode.value;
        }

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    return secondLargest === -Infinity ? null : secondLargest;
  }

  countLeftNodes() {
    if (this.isEmpty()) return 0;

    let count = 0;
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        count++;
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return count;
  }
  countLeafNodes(node = this.root, count = 0) {
    if (node === null) {
      return count;
    }

    // If it's a leaf node (no left and right children)
    if (!node.left && !node.right) {
      return count + 1;
    }

    // Recursively count leaf nodes in both left and right subtrees
    count = this.countLeafNodes(node.left, count);
    count = this.countLeafNodes(node.right, count);

    return count;
  }
  countLeafNodesWithOutRecursion() {
    if (this.root === null) return 0;

    let queue = [this.root];
    let leafCount = 0;

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.left === null && node.right === null) {
        leafCount++;
      }
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return leafCount;
  }

  hasPathSum(node, targetSum) {
    // Base case: if the node is null, there's no path
    if (node === null) {
      return false;
    }

    // If we've reached a leaf node, check if the target sum is zero
    if (node.left === null && node.right === null) {
      return targetSum === node.value;
    }

    // Recursively check left and right subtrees, reducing the target sum
    const newTargetSum = targetSum - node.value;
    return (
      this.hasPathSum(node.left, newTargetSum) ||
      this.hasPathSum(node.right, newTargetSum)
    );
  }

  // Public method to check if the tree has a path sum
  // A path sum in a Binary Search Tree (BST)
  // refers to the sum of the values of nodes that form a path from the root node to any leaf node.
  // A leaf node is a node that has no children (i.e., both its left and right child are null).

  // Given a BST, you need to find if there's a path from the root to any leaf node such that
  // the sum of the node values along the path equals a given target value.

  checkPathSum(targetSum) {
    return this.hasPathSum(this.root, targetSum);
  }

  checkPathSumIterative(targetSum) {
    if (!this.root) {
      return false;
    }

    // Stack stores [node, currentSum] pairs
    const stack = [[this.root, targetSum - this.root.value]];

    while (stack.length > 0) {
      const [node, currSum] = stack.pop();

      // If at a leaf node, check if the remaining sum is zero
      if (node.left === null && node.right === null && currSum === 0) {
        return true;
      }

      // Push right child if it exists
      if (node.right !== null) {
        stack.push([node.right, currSum - node.right.value]);
      }

      // Push left child if it exists
      if (node.left !== null) {
        stack.push([node.left, currSum - node.left.value]);
      }
    }

    return false;
  }
  countNodes(node = this.root) {
    if (node === null) {
      return 0;
    } else {
      const leftCount = this.countNodes(node.left);
      const rightCount = this.countNodes(node.right);
      return 1 + leftCount + rightCount;
    }
  }
  
  insertIteration(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = new Node(value);
          return;
        } else {
          current = current.right;
        }
      } else {
        break;
      }
    }
  }

  countSingleChildNodes(root) {
    if (root === null) {
      return 0;
    }

    let count = 0;

    // Check if the current node has exactly one child
    if ((root.left && !root.right) || (root.right && !root.left)) {
      count = 1;
    }

    // Recursively count single-child nodes in the left and right subtrees
    return (
      count +
      countSingleChildNodes(root.left) +
      countSingleChildNodes(root.right)
    );
  }

  countSingleChildNodesIterative() {
    const queue = [this.root];
    let count = 0;

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (
        (!currentNode.right && currentNode.left) ||
        (currentNode.right && !currentNode.left)
      ) {
        count++;
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return count;
  }

  // root: The root of the binary tree (or subtree).

  // p: The first node for which we need to find the LCA.

  // q: The second node for which we need to find the LCA
  findLCA(node, p, q) {
    if (node === null) {
      return null;
    }
    // If both p and q are smaller than node, LCA lies in the left subtree
    if (p.value < node.value && q.value < node.value) {
      return this.findLCA(node.left, p, q);
    }

    // If both p and q are greater than node, LCA lies in the right subtree
    if (p.value > node.value && q.value > node.value) {
      return this.findLCA(node.right, p, q);
    }

    // If one node is on the left and one is on the right, or the node is either p or q
    return node;
  }

  // Iterative approach to find LCA of two nodes
  findLCAIterative(node, p, q) {
    while (node !== null) {
      // If both p and q are smaller, move to the left subtree
      if (p.value < node.value && q.value < node.value) {
        node = node.left;
      }
      // If both p and q are greater, move to the right subtree
      else if (p.value > node.value && q.value > node.value) {
        node = node.right;
      }
      // Otherwise, we have found the split point, or one of p or q matches the current node
      else {
        return node;
      }
    }
    return null;
  }

  //     10
  //    /  \
  //   5    15
  //  / \   / \
  // 3   7 12  18
  // Here, the root node is 10, and we have nodes such as 5, 3, 7, 15, 12, and 18.
  // Now, if we're given two nodes, say 3 and 7, we want to find their Lowest Common Ancestor.

  // Look at the path from node 3 to the root:
  // 3 -> 5 -> 10

  // Look at the path from node 7 to the root:
  // 7 -> 5 -> 10

  // Find the deepest common node in both paths.
  // Both paths intersect at 5, which is the Lowest Common Ancestor.
  // The key is that 5 is the lowest node (deepest) that appears in both paths,
  // making it the common ancestor of both nodes 3 and 7.

  // Example 2: Finding LCA of nodes 3 and 12:

  //           10
  //          /  \
  //         5    15
  //        / \   / \
  //       3   7 12  18
  //       ↑          ↑
  //      Common Ancestor -> 10
  twoSumwithSortApproach(k) {
    const sorted = this.inOrder(); // Get the in-order traversal (sorted order) of the BST

    let left = 0;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[left] + sorted[right];

      if (sum === k) {
        return true; // We found a pair that sums to k
      } else if (sum < k) {
        left++; // We need a larger sum, move left pointer to the right
      } else {
        right--; // We need a smaller sum, move right pointer to the left
      }
    }

    return false; // If no pair found that sums to k
  }
  // Method to check if two nodes in the BST sum up to the target value k
  twoSumUsingSet(k) {
    const seen = new Set(); // Initialize a Set to keep track of seen values

    return this.twoSumInOrder(this.root, k, seen);
  }

  // Normal in-order traversal method
  twoSumInOrder(node, k, seen) {
    if (!node) return false; // Base case: If node is null, return false

    // Traverse the left subtree
    if (this.twoSumInOrder(node.left, k, seen)) return true;

    // Check if the complement of node.value (i.e., k - node.value) is in the set
    if (seen.has(k - node.value)) {
      return true; // If yes, we've found the pair, return true
    }

    // Add the current node's value to the Set
    seen.add(node.value);

    // Traverse the right subtree
    return this.twoSumInOrder(node.right, k, seen);
  }

  findDiameter(node) {
    if (node === null) {
      return -1; // Base case: height of null node is -1
    }

    // Recursively calculate the height of left and right subtrees
    const leftHeight = this.findDiameter(node.left);
    const rightHeight = this.findDiameter(node.right);

    // Update the diameter: the longest path is through the current node
    this.diameter = Math.max(this.diameter, leftHeight + rightHeight);

    // Return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Function to return the diameter
  getDiameter() {
    this.diameter = 0; // Reset the diameter before computation
    this.findDiameter(this.root); // Call the recursive function
    return this.diameter; // Return the diameter after the DFS
  }

  // The goal of the problem is to take a sorted array and convert it
  // into a height-balanced Binary Search Tree.

  // In-order Traversal of a BST: If you perform an in-order traversal (left → root → right) of a BST,
  // you get the elements in sorted order.

  // Balanced BST: To get a balanced BST, you want to ensure that the root of the tree divides the
  // array into two halves (left and right subtrees), each of which is also a BST.
  // The best way to achieve this is to make the middle element of the sorted array the root of the BST.

  // 1. Use the Middle Element:

  //  The middle element of the sorted array should be chosen as the root because it ensures the tree remains balanced.
  //  This is because the middle element divides the array into two equal halves, and this division naturally provides
  //  balance to the tree.

  // Recursively Apply the Same Logic:

  // Once the middle element is chosen as the root, you recursively apply the same logic to the two subarrays
  // (left and right of the middle element) to build the left and right subtrees, respectively.

  // Termination Condition:

  // The base case for the recursion is when the array has zero or one element, at which point the tree node is
  // either None (if the array is empty) or the node itself (if the array has one element).

  //  Step-by-Step Breakdown of the Process

  // Find the middle element of the sorted array. This element will be the root of the tree (or subtree).

  // Recursively build the left subtree:

  // Take the left half of the array (elements before the middle) and recursively construct the left subtree.

  // Recursively build the right subtree:

  // Take the right half of the array (elements after the middle) and recursively construct the right subtree.

  // Repeat until all subarrays are processed:

  // Each recursive call processes smaller and smaller subarrays until all elements from the array are placed into the tree.

  // [1, 2, 3, 4, 5, 6, 7]

  //     4
  //    / \
  //   2   6
  //  / \ / \
  // 1  3 5  7

  sortedArrayToBst = () => {
    const sortedArray = this.inOrder();

    if (!sortedArray || sortedArray.length === 0) return null;

    const buildBst = (start, end) => {
      if (start > end) return null;

      const middle = Math.floor((start + end) / 2);

      const root = new Node(sortedArray[middle]);

      root.left = buildBst(start, middle - 1);
      root.right = buildBst(middle + 1, end);

      return root;
    };

    this.root = buildBst(0, sortedArray.length - 1);
  };

  //sum of left leaves nodes

  sumLeftLeaves() {
    let sum = 0;

    if (!root) return sum;
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.value;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return sum;
  }

  //find the max occuring values in a bst

  findMode() {
    const queue = [this.root];
    const result = [];
    let maxCount = 0;
    const count = {};

    while (queue.length > 0) {
      const node = queue.shift();

      if (count[node.value]) {
        count[node.value]++;
      } else {
        count[node.value] = 1;
      }

      if (count[node.value] > maxCount) {
        maxCount = count[node.value];
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    for (let val in count) {
      if (count[val] === maxCount) {
        result.push(Number(val));
      }
    }

    return result.length > 0 ? result : [0];
  }

  //check if leaf-similar in if we give two tree roots

  // use dfs inorder because:

  // You start at the top of the tree (the root).
  // First, you look at the left branch of the tree and go all the way down to the
  // leftmost leaf (the furthest left child).

  // Once you've reached the leftmost leaf, you pick it up (the leaf node) and put it
  // in your "collection."

  // Then, you go back to the parent node and look at the right branch of that node.

  // You repeat the process: go left first, pick up the leaf, then go right.
  similarLeafNode(roo1, root2) {
    const leaves1 = [];
    const leaves2 = [];

    const inorder = (node, result) => {
      if (node) {
        inorder(node.left, result);
        if (!node.left && !node.right) {
          result.push(node.value);
        }
        inorder(node.right, result);
      }
    };

    inorder(roo1, leaves1);
    inorder(root2, leaves2);

    if (leaves1.length !== leaves2.length) return false;

    for (let i = 0; i < leaves1.length; i++) {
      if (leaves1[i] !== leaves2[i]) return false;
    }

    return true;
  }

  isHeightBalanced(root = this.root) {
    const dfs = (node) => {
      if (node === null) return 0;

      const leftHeight = dfs(node.left);

      if (leftHeight === -1) return -1;

      const rightHeight = dfs(node.right);

      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }

      return Math.max(leftHeight, rightHeight) + 1;
    };
    return dfs(root) !== -1;
  }

  // Define the tree node


// Helper to calculate depth of leftmost path
 findDepth(node) {
  let depth = 0;
  while (node) {
    depth++;
    node = node.left;
  }
  return depth;
}

// Main function to check if tree is perfect
 isPerfect(root) {
  const depth = findDepth(root);

  function check(node, level = 1) {
    if (!node) return true;

    // If it's a leaf
    if (!node.left && !node.right) {
      return level === depth;
    }

    // If it's an internal node, must have both children
    if (!node.left || !node.right) return false;

    // Recurse on both subtrees
    return check(node.left, level + 1) && check(node.right, level + 1);
  }

  return check(root);
}


  //construct a bst from inorder ,preorder,postorder traversel
  //zigzag level order traversal
  //flatten a binary tree to a linked list
  //predecessor and successor of a node in a bst
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(15);
// console.log(bst.search(10)); // true
// console.log(bst.search(bst.root,7)); // false
// console.log(bst.inOrder()); // [5, 10, 15]
// console.log(bst.height()); // 1
// console.log(bst.min(bst.root)); // 5
// console.log(bst.max(bst.root)); // 15
// console.log(bst.closestValue(bst.root, 12)); // 10
// bst.delete(10);
console.log(bst.inOrder()); // [5, 15]

console.log("second largest: ", bst.secLargestBFS());
console.log("leaf nodes : ", bst.countLeafNodes());
