class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index.");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    const newNode = new Node(value);
    prev.next = newNode;
    newNode.next = current;
    this.size++;
    console.log(`Inserted ${value} at index ${index}`);
  }

  insertAfter(value, afterValue) {
    let current = this.head;
    while (current !== null) {
      if (current.value === afterValue) {
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }
      current = current.next;
    }
  }

  insertBefore(value, beforeValue) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    if (this.head.value === beforeValue) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === beforeValue) {
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr;
        this.size++;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  print() {
    let current = this.head;
    let result = [];
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      while (current !== null) {
        result.push(current.value);
        current = current.next;
      }
    }
    return result;
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return "Nothing to remove, the list is empty";
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteLast() {
    if (this.isEmpty()) {
      return "Nothing to remove, the list is empty";
    }
    if (this.size === 1) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next && current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }

  deleteValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index.");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      console.log("Removed from index 0");
      return;
    }

    let current = this.head;
    let count = 0;

    while (count < index - 1) {
      current = current.next;
      count++;
    }

    current.next = current.next.next;
    this.size--;
    console.log(`Removed from index ${index}`);
  }

  deleteAlternateNodes(head) {
    if (!head || !head.next) {
      return head;
    }

    let current = head;

    while (current && current.next) {
      current.next = current.next.next;

      current = current.next;
    }

    return head;
  }

  deleteEvenNumbers() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    while (this.head && this.head.value % 2 === 0) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value % 2 === 0) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }

  deleteDuplicates() {
    let current = this.head;
    while (current !== null) {
      let runner = current;
      while (runner.next !== null) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  deleteDuplicatesInSortedList() {
    let current = this.head;

    while (current !== null && current.next !== null) {
      if (current.val == current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  deleteDuplicatesEfficient() {
    const seen = new Set();
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (seen.has(current.value)) {
        prev.next = current.next;
        this.size--;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }

  findMiddleDelete() {
    if (this.size <= 2) {
      console.log("There is no middle to delete");
      return;
    }
    let slowPointer = this.head;
    let fastPointer = this.head;
    let prev = null;

    while (fastPointer !== null && fastPointer.next !== null) {
      prev = slowPointer;
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    prev.next = slowPointer.next;
    this.size--;
  }

  search(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  findMiddle() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    console.log("Middle element:", slowPointer.value);
  }

  findNthNode(n) {
    if (n <= 0 || n > this.size) {
      console.log("Out of bounds");
      return;
    }
    let current = this.head;
    let count = 1;
    while (current !== null) {
      if (count === n) {
        return current.value;
      }
      current = current.next;
      count++;
    }
    return -1;
  }

  countNodes() {
    if (this.isEmpty()) {
      console.log("List is empty", 0);
      return;
    }
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    console.log("Number of Nodes:", count);
  }

  frequency() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let frequency = {};
    while (current !== null) {
      frequency[current.value] = (frequency[current.value] || 0) + 1;
      current = current.next;
    }

    return frequency;
  }

  largest() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let largest = -Infinity;
    while (current !== null) {
      if (current.value > largest) {
        largest = current.value;
      }
      current = current.next;
    }

    return largest;
  }

  secondLargest() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let current = this.head;

    while (current !== null) {
      if (current.value > largest) {
        secondLargest = largest;
        largest = current.value;
      } else if (current.value > secondLargest && current.value !== largest) {
        secondLargest = current.value;
      }

      current = current.next;
    }

    return { largest, secondLargest };
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  detectCycle() {
    if (this.isEmpty()) {
      console.log("List is empty, no cycle.");
      return false;
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
        console.log("Cycle detected!");
        return true;
      }
    }
    console.log("No cycle detected.");
    return false;
  }

  // Do not store the value ??
  //   // Create two separate nodes with the same value:
  // let nodeA = new ListNode(8);
  // let nodeB = new ListNode(8);

  // // These are different objects (memory locations)
  // console.log(nodeA === nodeB); // false

  // // However, they contain the same value:
  // console.log(nodeA.val === nodeB.val); // true

  checkIntersectionOf2List(headA, headB) {
    let currentList1 = headA;
    let currentList2 = headB;

    let set = new Set();

    while (currentList1 !== null) {
      set.add(currentList1);
      currentList1 = currentList1.next;
    }

    while (currentList2 !== null) {
      if (set.has(currentList2)) {
        return currentList2;
      }
      currentList2 = currentList2.next;
    }

    return null;
  }

  // can you solve it without using extra space

  checkIntersectionOf2ListwithoutExtraSpace(headA, headB) {
    // Step 1: Find the lengths of both linked lists directly in the main function
    let lengthA = 0;
    let lengthB = 0;

    // Traverse List A to find its length
    let currentA = headA;
    while (currentA !== null) {
      lengthA++;
      currentA = currentA.next;
    }

    // Traverse List B to find its length
    let currentB = headB;
    while (currentB !== null) {
      lengthB++;
      currentB = currentB.next;
    }

    // Step 2: Adjust the starting point for the longer list using if conditions
    if (lengthA > lengthB) {
      // Move headA forward by the difference in lengths
      for (let i = 0; i < lengthA - lengthB; i++) {
        headA = headA.next;
      }
    } else if (lengthB > lengthA) {
      // Move headB forward by the difference in lengths
      for (let i = 0; i < lengthB - lengthA; i++) {
        headB = headB.next;
      }
    }

    // Step 3: Traverse both lists simultaneously and check for intersection
    while (headA !== null && headB !== null) {
      if (headA === headB) {
        // If both nodes are the same (intersection point)
        return headA; // Return the intersecting node
      }
      headA = headA.next; // Move to the next node in List A
      headB = headB.next; // Move to the next node in List B
    }

    // If no intersection is found, return null
    return null;
  }
  //add two numbers as in a linked list
  checkPalindrome() {
    let stack = [];
    let current1 = head;
    while (current1 !== null) {
      stack.push(current1.val);
      current1 = current1.next;
    }

    console.log(stack);
    let current2 = head;
    while (current2 !== null) {
      let value = stack.pop();
      if (current2.val !== value) {
        return false;
      }
      current2 = current2.next;
    }

    console.log(stack);
    return true;
  }

  mergeTwoSortedLinkedLists(list1, list2) {
    let dummy = new Node();
    let current = dummy;

    // Pointers for both input lists
    let p1 = l1;
    let p2 = l2;

    // Compare nodes from both lists until one is exhausted
    while (p1 !== null && p2 !== null) {
      if (p1.val < p2.val) {
        current.next = p1;
        p1 = p1.next;
      } else {
        current.next = p2;
        p2 = p2.next;
      }
      current = current.next;
    }

    // If there are remaining nodes in either list, append them
    if (p1 !== null) {
      current.next = p1;
    }
    if (p2 !== null) {
      current.next = p2;
    }

    // Return the merged list, which starts at dummy.next
    return dummy.next;
  }

  addTwoNumbers(head1, head2) {
    // Dummy node to hold the result and a pointer to the current node in the result list
    let dummyNode = new Node(0);
    let current = dummyNode;

    // Variable to hold the carry value
    let carry = 0;

    // Pointers for both linked lists
    let t1 = head1;
    let t2 = head2;

    // Loop while there are nodes in either list or carry is not zero
    while (t1 !== null || t2 !== null) {
      let sum = carry; // Start with the current carry value

      // Add the value from the first list if available
      if (t1 !== null) {
        sum += t1.value;
        t1 = t1.next; // Move the pointer to the next node
      }

      // Add the value from the second list if available
      if (t2 !== null) {
        sum += t2.value;
        t2 = t2.next; // Move the pointer to the next node
      }

      // Update carry for the next iteration (sum divided by 10)
      carry = Math.floor(sum / 10);

      // Create a new node with the digit (sum mod 10) and add it to the result list
      let newNode = new Node(sum % 10);
      current.next = newNode; // Attach the new node to the result list
      current = current.next; // Move the current pointer to the new node
    }

    // If there's any remaining carry, add it as the last node
    if (carry !== 0) {
      let newNode = new Node(carry); // Create a new node for the carry
      current.next = newNode; // Attach the carry node to the result list
    }

    // Return the next of dummyNode, as dummyNode was a placeholder
    return dummyNode.next;
  }

  // remove nth node from the end of a list

  // remove cycles in a linked list

  // clone a linked list

  // return the starting point of a cycle

  // swapping values but do it with swapping nodes only

  swapPairs() {
    let current = this.head;
    while (current !== null && current.next !== null) {
      let temp1 = current.val;
      current.val = current.next.val;
      current.next.val = temp1;
      current = current.next.next;
    }
    return this.head;
  }
  rotateRight(head, k) {
    // Step 1: Find the length of the list
    let length = 1;
    let pt = head;
    while (pt && pt.next) {
      length++;
      pt = pt.next;
    }

    // Step 2: Adjust k to avoid unnecessary rotations
    k = k % length;
    if (k === 0) return head; // If k is 0 or a multiple of length, no change is needed

    // Step 3: Find the new tail (the node just before the new head)
    let newTail = head;
    // We want to move to the position that is 'length - k - 1' steps from the beginning
    for (let i = 0; i < length - k - 1; i++) {
      newTail = newTail.next;
    }

    // Step 4: The new head will be the next node after the new tail
    let newHead = newTail.next;

    // Step 5: Break the circular link by setting newTail.next to null
    newTail.next = null;

    // Step 6: Link the old tail to the old head to complete the rotation
    pt.next = head;

    // Step 7: Return the new head of the rotated list
    return newHead;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(9);
list.append(890);
list.append(80);

console.log(list.print());
console.log(list.findNthNode(3));
console.log(list.removeNthFromEndSimpleMethod(5));
