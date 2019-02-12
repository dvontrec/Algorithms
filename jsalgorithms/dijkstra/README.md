# Dijkstra's Algorithm

Algorithm for finding the shortest path between 2 given nodes in a graph.
This is just for basic understanding

- Will use the skelaton of a weighted graph
- Will use a simple priority queue (sorted array push/shift)

## Pseudocode

- Function accepts a starting and ending vertex
- Create an object and set each key to be every vertex in the adjacency list with a value of infinity except for the starting vertex which should have a value of 0
- After setting the value in the distance object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because thats where we will begin
- Create another object called previous ans set each key to be every vertex in the adjacency list with a value of null
- Loop as long as there is anything in the priority queue
  - Seque a vertex from the priority queue
  - If the vertex is the same as the ending vertex we are done
  - Loop through each value in the adjacency list at that vertex (connected edges)
    - Calculate the distance to that vertex from the starting vertex
    - If the distance is less than what is currently stored in out distance object
      - Update the distance object with the new lower distance
      - Update the previous object to contain that vertex
      - enqueue the vertex with the total distance fro the start node
