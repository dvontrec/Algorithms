# Max Binary Heap

- Binary heap where parent nodes are bigger than the children

## Insert

- Add To the end and bubble up
- Recieves a value for the new point in the heap
- Push the value to the end of the heap
- Bubble up
  - Create a variable that is the length of values -1
  - Create parent value that is (n-1)/2 floored
  - Loop as ling as the n value is greater than the parent value
  - Swap the value of n with the parent
  - Set the index to be the parent index and start over

## Extract Max (remove root)

- Swap the first value in the values property with the last one
- Pop from the values , so you return the value at the end (the old root)
- Bubble down the new root to the correct spot
  - parent index starts ayt 0
  - find the index of the left child (2\* index +1) \*\* make sure inbounds
  - find the index of the right child (2\* index +2) \*\* make sure inbounds
  - if the left or right child is greater than the element swap, if both are greater swap the larger child
  - the child index is swapped to now be the parent index
  - keep looping and swapping until neither child is larger than the element
- Return the old root

# PriorityQueue

# Min Binary Heap

- Binary heap where parent nodes are smaller than the children

##Enqueue

- Accepts a value and a priority
- Creates a node with given value and priority
- Places node in heap based on priority
- Same as Insert

## Dequeue

- Removes root element and returns it
- Rearranges heap based on priority
- Same as Extract
