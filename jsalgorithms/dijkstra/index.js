class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // functoin for adding vertices
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight: weight });
    this.adjacencyList[v2].push({ node: v1, weight: weight });
  }

  // Function for finding the shortest path from one node of a graph to an end node
  dijkstrasAlgorithm(start, end) {
    // Object to store distances
    let distance = {};
    // set the distance to be infinoty to start
    for (let key in this.adjacencyList) {
      // if its the start push as 0
      if (key === start) {
        distance[key] = 0;
      } else {
        distance[key] = Infinity;
      }
    }
    // Priority queue
    let priority = new PriorityQueue();
    // adds each node to the priority queue with a priority of INF
    for (let key in distance) {
      priority.enqueue(key, distance[key]);
    }
    // Object to store previous nodes
    let previous = {};
    // set the previous to be null to start
    for (let key in this.adjacencyList) {
      previous[key] = null;
    }
    // Loop until the queue is empty
    while (priority.values.length) {
      let smallest = priority.dequeue().val;
      // End loop if node is the end
      if (smallest === end) {
        let node = smallest;
        let result = [];
        // Loop until back to the start
        while (node !== null) {
          // add the node to the results array
          result.unshift(node);
          // set the node as the node before
          node = previous[node];
        }
        // return the results array
        return result;
      }
      // otherwise loop through all adjacent vertices
      if (smallest || distance[smallest] !== Infinity) {
        // loop through each neighbor
        for (let neighbor in this.adjacencyList[smallest]) {
          let next = this.adjacencyList[smallest][neighbor];
          // Find the new distance to the next current distance plus the weight to the next
          let dis = distance[smallest] + next.weight;
          // if the new distance is smaller swap
          if (dis < distance[next.node]) {
            distance[next.node] = dis;
            // update previous for how we got here
            previous[next.node] = smallest;
            // enqueue with new priority
            priority.enqueue(next.node, dis);
          }
        }
      }
    }
    return previous;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
// console.log(g.adjacencyList);
console.log(g.dijkstrasAlgorithm('A', 'E'));
