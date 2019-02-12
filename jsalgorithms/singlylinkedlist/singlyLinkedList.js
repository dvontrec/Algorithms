// Create the Node class
class Node {
  // Create the constructor for the node
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Defines linked list class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // function used to add nodes to the end of the list
  push(val) {
    // create a node from the value
    let node = new Node(val);
    // if this is the first node set it as the head
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  // function used to grab and remove the last value from the list
  pop() {
    // if there are no nodes return undefined
    if (!this.head) {
      return undefined;
    }
    // set the value of the current node
    let current = this.head;
    let pre = current;
    // loop through the list until we reach the tail
    while (current.next) {
      pre = current;
      current = current.next;
    }
    // sets the 2nd to last node to be the new tail
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the old tail
    return current;
  }

  // function used to grab and remove the first value from the list
  shift() {
    // if there is no head return undefined
    if (!this.head) {
      return undefined;
    }
    let head = this.head;
    this.head = this.head.next;
    this.length--;
    // if there is no head change the tail to null
    if (!this.head) {
      this.tail = null;
    }
    // return the old tail
    return head;
  }

  // function used to add a node to the beginnning of a list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    // create a pointer that starts at zero
    let pointer = 0;
    // set the current node
    let current = this.head;
    // loop through until pointer is equal to the index
    while (pointer < index) {
      // increment the pointer
      pointer++;
      // set the current node to the old currents next
      current = current.next;
    }
    // return the current
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    // create a new node
    let newNode = new Node(value);
    // finds the node before the current index
    let preNode = this.get(index - 1);
    // sets the properties of this node and the previous
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // If the index is less than zero or greater than length return undefined
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    // grab the index and index before
    let pre = this.get(index - 1);
    let curr = pre.next;
    // Sets the next of the previus to be the next next(skip)
    pre.next = curr.next;
    this.length--;
    // return the value of the node removed
    return curr.val;
  }

  // function used to reverse singly linked lists
  reverse() {
    // DO stuff
    // Create variables for curr, prev, and next
    let node = this.head;
    let prev = null;
    let next = null;
    // Swap the head and the tail
    this.head = this.tail;
    this.tail = node;
    // loop through the list
    for (let i = 0; i < this.length; i++) {
      // Saves the next of the current node
      next = node.next;
      // set the next property of the current node to be the previous node
      node.next = prev;
      // sets the current node to be the new pre
      prev = node;
      // moves the node along
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('hello');
list.push('how');
list.push('are');
list.push('you');
// console.log();
// console.log(list);
// console.log('pop');
// console.log(list.pop());
// console.log('pop');
// console.log(list);
// console.log('pop');
// console.log(list.pop());
// console.log('pop');
// console.log(list);
// console.log('shift');
// console.log(list.pop());
// console.log('pop');
// console.log(list);
// console.log();
// console.log();
// console.log();
// console.log();
// list.push('hello');
// list.push('ok');
// list.push('goodbye');
// console.log();
// console.log(list);
// console.log('shift');
// console.log(list.shift());
// console.log('shift');
// console.log(list);
// console.log('shift');
// console.log(list.shift());
// console.log('shift');
// console.log(list);
// console.log('shift');
// console.log(list.shift());
// console.log('shift');
// console.log(list);
// list.unshift('hey');
// console.log(list);
// console.log(list.head);
// list.insert(1, 'are you');
// console.log(list);
// console.log(list.get(1));
// console.log(list.remove(1));
console.log(list);
console.log();
console.log();
console.log();
console.log();
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(2).val);
console.log(list.get(3).val);
list.reverse();
console.log();
console.log();
console.log(list);
console.log();
console.log();
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(2).val);
console.log(list.get(3).val);
list.reverse();
console.log();
console.log();
console.log(list);
console.log();
console.log();
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(2).val);
console.log(list.get(3).val);
