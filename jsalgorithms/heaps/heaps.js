// Creates a class for Max binary heaps (All nodes are smaller than the parent)
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    let values = this.values;
    values.push(val);
    let index = values.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (values[index] > values[parent]) {
      let temp = this.values[index];
      values[index] = values[parent];
      values[parent] = temp;
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    let values = this.values;
    //swap the first and last values
    let max = values[0];
    values[0] = values[values.length - 1];
    values.pop();
    let parentIndex = 0;
    // Buble down
    while (true) {
      let right = parentIndex * 2 + 2;
      let left = parentIndex * 2 + 1;
      let max;
      // if there is no right only compare to the left
      if (right >= values.length) {
        max = left;
      } else {
        max = values[left] >= values[right] ? left : right;
      }
      // if max is greater than parent
      if (values[max] > values[parentIndex]) {
        let temp = values[parentIndex];
        values[parentIndex] = values[max];
        values[max] = temp;
        parentIndex = max;
      } else break;
    }
    //Return old root
    return max;
  }
}

// Node class for priorityqueue
class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

// Min Binary heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    // create a new node
    let node = new Node(val, priority);
    let values = this.values;
    values.push(node);
    // if the heap was not empty
    if (values.length > 1) {
      let index = values.length - 1;
      let parent = Math.floor((index - 1) / 2);
      let pp = values[parent].priority;
      let ip = values[index].priority;
      while (ip < pp && parent >= 0) {
        let temp = this.values[index];
        values[index] = values[parent];
        values[parent] = temp;
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }

    return this.values;
  }

  dequeue() {
    let values = this.values;
    //swap the first and last values
    let min = values[0];
    values[0] = values[values.length - 1];
    values.pop();
    let parentIndex = 0;
    // Buble down
    while (true) {
      let right = parentIndex * 2 + 2;
      let left = parentIndex * 2 + 1;
      let min;
      // if there is no right only compare to the left
      if (right >= values.length) {
        min = left;
      } else {
        console.log(values[left]);
        console.log(values[right].priority);
        min = values[left].priority <= values[right].priority ? left : right;
      }
      let mp = values[min];
      // if min is greater than parent
      if (mp && values[min].priority < values[parentIndex].priority) {
        let temp = values[parentIndex];
        values[parentIndex] = values[min];
        values[min] = temp;
        parentIndex = min;
      } else break;
    }
    //Return old root
    return min;
  }
}

let bh = new MaxBinaryHeap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
console.log(bh.insert(55)); // [ 55, 39, 41, 18, 27, 12, 33 ]
console.log(bh.extractMax()); // 55

let pq = new PriorityQueue();
pq.enqueue('Stomach ache', 3);
pq.enqueue('cough', 2);
pq.enqueue('Stomach gone', 1);
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
