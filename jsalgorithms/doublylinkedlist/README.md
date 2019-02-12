# Doubly Linked List

## Node

- stores 3 things
  - Piece of data - val
  - Reference to the previous node
  - Reference to next node

## Push

- Accepts a value
- Adds a new node to the end of the linkedlist
- If the list is empty add the new node as the head and the tail
- If there are elements set the prev property to be the current tail
- Set the next of the tail to be the new node
- Increment the length
- Return the list

## Pop

- Removes the last value from the list
- If the list is empty return undefined
- Set the current tail in a variable to be returned
- If the length is 1 set the head and tail both to be null
- Update the tail to be the prev of the current tail
- Set the new tails next to be null
- Decrement the length
- Return the old tail

## Shift

- Removes the head from a doubly linked list
- If the length is 0 return undefined
- Store the current head in a variable
- If the length is one set head and tail to null
- Otherwise set the next node to be the new head
- Set the new heads prev property to null
- Set the old heads next to null
- Decrement the length
- Return the old head

## Unshift

- Accepts a value
- Adds a new node to the beginning of a list
- If the list is empty sets the head and the tail to be the new node
- Otherwise set the prev of the head to be the new node
- Set the next of the new node to be the head
- Update the head to be the new node
- Increment the length
- Return the list

## Get

- Accepts an index
- If the index is less than 0 or greaterthan or equal to the length return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and moving towards the middle
  - return the node once it is found
- If the index is greater than half the length of the list
  - Loop through the list tstarting from the tail and moving towards the middle
- Returns the node at the given index

## Set

- Accepts an index and a variable
- Create a variable that is a result of getting from index
  - If a valid node is returned set the value of the node to be tha value passed to the function
  - return true
- Otherwise return false

## Insert

- Accepts an index and a value
- If the index is less than zero or greater than the lebgth return false
- If index is 0, unshift
- If index is same as length push
- Use get method to access index -1
- Set the next and prev properties on the correct nodes to link everything together
- Increment the length
- Return true

## Remove

- Accepts an index to be removed
- If the index is less than zero or greater than or equal to the length return undefined
- If the index is zero shift
- If index is length -1, pop
- Use the get method to retrieve the item to be removed
- Update the next and prev properties to remove the found nodes from the list
- Set the next and prev to null on found node
- Decrement the length
- Return the removed node
