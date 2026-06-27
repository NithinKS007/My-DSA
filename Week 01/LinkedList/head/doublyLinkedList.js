// Node class to represent each element in the list
class Node {
  constructor(value) {
    this.value = value; // Node's value
    this.prev = null; // Pointer to the previous node
    this.next = null; // Pointer to the next node
  }
}

// DoublyLinkedList class to manage the nodes
class DoublyLinkedList {
  constructor() {
    this.head = null; // Start with an empty list
  }

  // Insert at the beginning
  insertAtBeginning(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Insert at the end
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        // Traverse to the last node
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }

  // Delete from the beginning
  deleteFromBeginning() {
    if (!this.head) {
      // List is empty
      console.log("List is empty");
      return;
    }
    if (this.head.next) {
      // If there's more than one element
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      // Only one element left
      this.head = null;
    }
  }

  // Delete from the end
  deleteFromEnd() {
    if (!this.head) {
      // List is empty
      console.log("List is empty");
      return;
    }
    if (this.head.next) {
      // If there's more than one element
      let current = this.head;
      while (current.next) {
        // Traverse to the last node
        current = current.next;
      }
      current.prev.next = null;
    } else {
      // Only one element left
      this.head = null;
    }
  }

  // Delete a node by its value
  deleteByValue(value) {
    if (!this.head) {
      // List is empty
      console.log("List is empty");
      return;
    }

    let current = this.head;
    // If the node to delete is the head node
    if (current.value === value) {
      if (current.next) {
        // If there's more than one node
        this.head = current.next;
        this.head.prev = null;
      } else {
        // Only one node in the list
        this.head = null;
      }
      return;
    }

    // Traverse the list to find the node
    while (current) {
      if (current.value === value) {
        // Node is found, update the previous and next pointers
        if (current.next) {
          current.next.prev = current.prev;
        }
        if (current.prev) {
          current.prev.next = current.next;
        }
        return; // Node deleted, exit the function
      }
      current = current.next;
    }
    console.log(`Value ${value} not found in the list.`);
  }

  // Display the list from the beginning
  displayForward() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.next;
    }
    result += "None";
    console.log(result);
  }

  // Display the list from the end
  displayBackward() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    while (current.next) {
      // Traverse to the last node
      current = current.next;
    }
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.prev;
    }
    result += "None";
    console.log(result);
  }
}

// Example usage
const dll = new DoublyLinkedList();
dll.insertAtBeginning(10);
dll.insertAtBeginning(20);
dll.insertAtEnd(5);
dll.insertAtEnd(30);

dll.displayForward(); // Output: 20 <-> 10 <-> 5 <-> 30 <-> None

// Deleting value 10
dll.deleteByValue(10);
dll.displayForward(); // Output: 20 <-> 5 <-> 30 <-> None

// Deleting value 5
dll.deleteByValue(5);
dll.displayForward(); // Output: 20 <-> 30 <-> None

// Trying to delete a non-existent value (e.g., 100)
dll.deleteByValue(100); // Output: Value 100 not found in the list.
