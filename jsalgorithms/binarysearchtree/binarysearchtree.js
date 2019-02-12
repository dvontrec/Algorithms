class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    // checks for repeat
    if (val === this.value) {
      console.log('this value is already in the tree');
    }
    // checks for less than
    if (val < this.value) {
      if (this.left === null) {
        this.left = new Node(val);
      } else {
        this.left.insert(val);
      }
    }
    // checks for greater than
    if (val > this.value) {
      if (this.right === null) {
        this.right = new Node(val);
      } else {
        this.right.insert(val);
      }
    }
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // Creata a new node
    let newNode = new Node(val);
    // if there is no root set a root
    if (!this.root) {
      this.root = newNode;
    } else {
      // begins the recursive node insert
      this.root.insert(val);
    }
    // return the tree
    return this;
  }

  find(val) {
    // Check for root
    if (!this.root) return false;
    // set the curent node
    let current = this.root;
    // loop till found
    while (current) {
      // equal
      if (current.value === val) {
        return true;
      }
      // greater than
      else if (current.value > val) {
        current = current.left;
      }
      // less than
      else if (current.value < val) {
        current = current.right;
      }
    }
    return false;
  }

  // function that returns all the nodes usinf breadth first
  breadthFirstSearch() {
    // If there is no root return null
    if (!this.root) {
      return null;
    }
    // creates an array to hold the nodes and a queue for checking nodes
    let nodes = [];
    let queue = [this.root];
    // while there is a que
    while (queue.length > 0) {
      // remove the node from the que
      let node = queue.pop();
      // add the left and right of the removed node to the que
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
      // add the node to the nodes
      nodes.push(node.value);
    }
    return nodes;
  }

  // function that returns the nodes using depth first (PreOrder)
  depthFirstSearchPreOrder() {
    // Create variable to store visited nodes
    let nodes = [];
    // Create variable to store current node(root)
    let current = this.root;
    // push values from helper function to nodes array
    traverse(current);
    // helper function for raversal
    function traverse(node) {
      // Do stuff
      // return node value
      nodes.push(node.value);
      // If the node has a left
      if (node.left) {
        traverse(node.left);
      }
      // If the node has a right
      if (node.right) {
        traverse(node.right);
      }
    }
    // return array of variables
    return nodes;
  }

  // function that returns the nodes using depth first (PostOrder)
  depthFirstSearchPostOrder() {
    // Create variable to store visited nodes
    let nodes = [];
    // Create variable to store current node(root)
    let current = this.root;
    // push values from helper function to nodes array
    traverse(current);
    // helper function for raversal
    function traverse(node) {
      // Do stuff
      // If the node has a left
      if (node.left) {
        traverse(node.left);
      }
      // If the node has a right
      if (node.right) {
        traverse(node.right);
      }
      // return node value
      nodes.push(node.value);
    }
    // return array of variables
    return nodes;
  }
  // function that returns the nodes using depth first (InOrder)
  depthFirstSearchInOrder() {
    // Create variable to store visited nodes
    let nodes = [];
    // Create variable to store current node(root)
    let current = this.root;
    // push values from helper function to nodes array
    traverse(current);
    // helper function for raversal
    function traverse(node) {
      // Do stuff
      // If the node has a left
      if (node.left) {
        traverse(node.left);
      }
      // return node value
      nodes.push(node.value);
      // If the node has a right
      if (node.right) {
        traverse(node.right);
      }
    }
    // return array of variables
    return nodes;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.breadthFirstSearch()); // [10, 6, 15, 3, 8, 20]
console.log(bst.depthFirstSearchPreOrder()); // [10, 6, 3, 8, 15, 20]
console.log(bst.depthFirstSearchPostOrder()); // [3, 8, 6, 20, 15, 10]
console.log(bst.depthFirstSearchInOrder()); // [3, 6, 8, 10, 15, 20]
