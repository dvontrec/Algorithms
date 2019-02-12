// Class for building an undirected graph (2 way connections)
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    // if there is not already a vertex with the given value
    if (!this.adjacencyList[val]) {
      // adds a key value pair to the adjacency list
      this.adjacencyList[val] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(key => key != v2); // filters the list leaving only keys that are not v2
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(key => key != v1); // filters the list leaving only keys that are not v1
  }

  removeVertex(vertex) {
    // for each connection remove the edge
    this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v));
    // remove the key from the object
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(vertex) {
    let list = this.adjacencyList;
    let results = [];
    let visited = [];
    helper(vertex);
    function helper(vertex) {
      // base case
      if (!vertex) {
        return;
      }
      visited.push(vertex);
      results.push(vertex);
      list[vertex].forEach(v => {
        if (!visited.includes(v)) {
          helper(v);
        }
      });
    }
    return results;
  }

  dfsIterative(vertex) {
    let stack = [];
    let results = [];
    let visited = [];
    stack.push(vertex);
    while (stack.length) {
      let v = stack.pop();
      if (!visited.includes(v)) {
        visited.push(v);
        results.push(v);
        this.adjacencyList[v].forEach(vert => {
          stack.push(vert);
        });
      }
    }
    return results;
  }

  bfs(vertex) {
    let queue = [];
    let results = [];
    let visited = [];
    queue.push(vertex);
    while (queue.length) {
      let v = queue.shift();
      if (!visited.includes(v)) {
        visited.push(v);
        results.push(v);
        this.adjacencyList[v].forEach(vert => {
          queue.push(vert);
        });
      }
    }
    return results;
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.dfsRecursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.dfsIterative('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(graph.bfs('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
