# Graphs

## Add Vertex

- Method that accepts a name of a vertex
- Adds a key to the adjacency list with the name of the vertex and sets its value to be an empty array

## Add Edge

- Accepts 2 vertecies
- Find in the adjacency list the key of vertex 1 and push vertex 2 to the array
- Find in the adjacency list the key of vertex 2 and push vertex 1 to the array

## Remove An Edge

- Accepts 2 vertices
- Reassign the key of vertex 1 to be an array that does not contain vertex 2
- Reassign the key of vertex 2 to be an array that does not contain vertex 1

## Remove A Vertex

- Accepts the name of the vertex
- Loops as long as there are other verteces in the adjacency list for this vertex
  - Remove the edges for the vertex and all its connected verteces
- Remove the key in the adjacency list for that vertex

## DFS

### RECURSIVE

- Accepts vertex
- Create a list to store the end result, to be returned at the very end
- Creates a place to store visited vertices
- Create a helper function that accepts a vertex
  - The helper function should return early if the vertex is empty
  - Place the vertex it accepts into visited and the results array
  - Loop over all of the values in the adjacent list for the vertex
  - If any of those values have not been visited, recursively invoke the helper function with that vertex
- return the results array

### Iterative

- Accepts a startig node / vertex
- Create a stack to help keep track of vertices(will use an array)
- Create a list to store the result
- Create a list to store visited vertices
- Add the starting vertex t othe stack, and mark it visited
- Wile the stack has something in it:
  - Pop the next vertex from the stack
  - If the vertex hasnt been visited
    - Mark as visited
    - Add to result list
    - Push all of its neighbors into the stack
- Return the results array

## BFS

- Accepts a vertex
- Create a queue (array shift and push) and place the starting vertex in it
- Create an array to store result nodes
- Create a place to store visied nodes
- Mark the starting node as visited
- Loop as long as there is a queue
  - Remove the first vertex from the queue and push it into the results array
  - Loop over adjacent verteces
    - If it has not been visited mark it as visited enqueue that vertex
- Return the results array
