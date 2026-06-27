class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const newnode = new Node(value);

    if (this.isEmpty()) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head.prev = newnode;
      this.head = newnode;
    }
    this.size++;
  }
  append(value) {
    const newnode = new Node(value);

    if (this.isEmpty()) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.prev = this.tail;
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }
    let current = this.head;
    while (current !== null) {
      console.log("Value in the list: ", current.value);
      current = current.next;
    }
  }

  delete(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.head.value === value && this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return;
      }
      current = current.next;
    }

    console.log("Node with value", value, "not found.");
  }
}
const list = new DoubleLinkedList();
