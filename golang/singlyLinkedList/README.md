# Singly Linked List

## Node

- stores 2 things
  - Piece of data - val
  - Reference to next node

## Push

- Accepts a value
- Create a new node using the value passed in
- If there is no head set the head and tail to be the newly created node
- If there is a head set the newly created node to be the next of the tail
- Increment length by 1
- Return the linked list

## Pop

- If there are no nodes in the list return undefined
- Loop through the list until tail is reached
- Set the property of the 2nd to last node to be null
- set the new tail to be the second to last item
- Decrement the length of the list by 1
- If length is zero after pop make head and tail null
- Return the node that was removed

## Shift

- If there are no nodes return undefined
- Store the current head property in a variable
- Set the head property to be the current heads next property
- Decrement the length by 1
- Return the falue of the node removed

## Unshift

- Accepts a value
- Creates a new node using the value passed to the function
- If there is no head set the head and tail to be the new node
- Set the newly created nodes next property to be the current list head
- Set the lists head to be the newly created node
- Increment the ength of the ist by 1
- Return the linked list

## Get

- Accepts an index (number)
- If the index is less than zero or greater than or equal to the list length return null
- Loop through the list until the index is reached and return the node at the specific index

## Set

- Accepts an index and a value
- Uses get to find specific node
- Updates the value of the node and return true

## Insert

- Accepts an index and a value
- If index is less than zero or greater than the length return false
- If the index is the same as the length push a new node to the end of the list
- If the index is 0 unshift the node to the head.
- Get the index -1 to get node before
- Set that nodes next to be the new node
- Set the old nex to the new nodes next
- Increment the length
- Return true

## Remove

- Accepts an index
- If the index is less than zero or greater than length return undefined
- If the index is the same as the length -1, pop
- If the index is 0 shift
- Otherwise use get to get previios node
- Set the next property of that node to be the next of the next node
- Decrement the length
- Return the value of the node removed

## Reverse

- Swap the head and the tail
- Create a variable for next
- Create a variable for prev
- Create a node variable initialized to start at the head
- Set the next to be the next property of whatever node is
- Set the prev to be the value of the node
- Set the node variable to be the value of the next
