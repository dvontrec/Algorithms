# Binary search Tree

- Tree with one root and 2 children
- No repeats
- Lower numbers on left higher numbers on right

## Insert

- Create a new node
- Start at the root
  - Check if there is a root, if not the new node is now the root
  - If there is a root check if the value of the new node is greater than or less than the root value
  - If the value is greater
    - Check to see if there is a node on the right
      - If there is, move to that node and compare values again
      - If there is not place the right
  - If the value is less
    - Check to see if there is a node on the left
      - If there is, move to that node and compare values again
      - If there is not place the new node as the left
- Return the tree

## Find

- Start at the root
- If there is no root return false, there are no nodes on the tree
- If there is a root check if it is the value we are looking for, if so return true
- If not check if the root value is greater than or less than the search value
  - If it is greater
    - Check if there is a node to the right
    - If there is move to thr right node
    - If there is not return false
  - If it is less
    - Check if there is a node to the left
    - If there is move to thr left node
    - If there is not return false

# Tree Traversal

## Breadth First Search

### Horizontal (Breadth) before Vertical (Depth)

- Create a queue (can be an array) and a variable to store the values of nodes visited
- Place the root in the queue
- Loop as long as there is anything in the que
  - Deque a node from the que and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequed add it to the que
  - If there is a right property on the node dequed add it to the que
- Return the value that stores the values

## Depth First Search ()

### Vertical (Depth) before Horizontal (Breadth)

## PreOrder (add node before visiting children)

- Create a variable to store the visited nodes
- Create a variable called current and store the root
- Write a helper function that accepts a node
  - Push the node value to the variable that stores the values
  - If the node has a left property call the helper on the left node
  - If the node has a right property call the helper on the right
- Invoke the helper with the current variable
- Return the array of variables

## PostOrder (add node after visiting children)

- Same as Pre order, just push value after looking for left and right
- Create a variable to store the visited nodes
- Create a variable called current and store the root
- Write a helper function that accepts a node
  - If the node has a left property call the helper on the left node
  - If the node has a right property call the helper on the right
  - Push the node value to the variable that stores the values
- Invoke the helper with the current variable
- Return the array of variables

## InOrder (Smallest to largest)

- Same as Pre order, just push value after looking for left, then look at right
- Create a variable to store the visited nodes
- Create a variable called current and store the root
- Write a helper function that accepts a node
  - If the node has a left property call the helper on the left node
  - Push the node value to the variable that stores the values
  - If the node has a right property call the helper on the right
- Invoke the helper with the current variable
- Return the array of variables
