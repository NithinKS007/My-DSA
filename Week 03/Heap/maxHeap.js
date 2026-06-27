class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    // each parent node must be greater than or equal to its children.

    // When you insert a new element into the Max-Heap, you add it at the end
    // (i.e., the last position in the tree, or in the array representation).

    // Bubble up condition: If the new element is greater than its parent, swap them.

    // The element is no longer greater than its parent.

    // Or, you reach the root (index 0).

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  poll() {
    if (this.heap.length === 0) return null;

    const maxValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop(); // remove the last element
    this.bubbleDown(0);
    return maxValue;

    // Locate the value you want to delete.

    // Replace the value with the last element in the heap (the last node).

    // Remove the last element from the heap (since it's now moved to the deleted value's position).

    // Restore the heap property by either "bubbling down" the element in the new position.
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }
  bubbleDown(index) {
    // Compare with Children: After placing the element at the root, compare it with its two children.
    // The left child is at index 2i + 1 and the right child is at index 2i + 2 (assuming 0-based indexing).

    // Swap with Largest Child: If the current element is smaller than either of its children,
    // you swap it with the larger of the two children (the larger one maintains the Max-Heap property).

    // Repeat: After the swap, continue the bubble down process from the position of the swapped element,
    // as it might violate the heap property further down.

    // Termination: The process continues until:

    // The element has no children (i.e., it reaches a leaf node).

    // The element is larger than both its children.

    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.bubbleDown(largest);
    }
  }

  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
  getRightChild(heap, i) {
    const rightChildIndex = 2 * i + 2;
    if (rightChildIndex < heap.length) {
      return heap[rightChildIndex];
    }
    return null;
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.display();
console.log(maxHeap.poll());
maxHeap.display();

const heapSort = (arr) => {
  let maxHeap = new MaxHeap();
  for (let num of arr) {
    maxHeap.insert(num);
  }
  const sortedArr = [];
  while (maxHeap.heap.length > 0) {
    sortedArr.unshift(maxHeap.poll());
  }
  return sortedArr;
};

const array = [10, 5, 20, 2, 15, 30];
const sortedArray = heapSort(array);
console.log("Sorted Array    :", sortedArray);
