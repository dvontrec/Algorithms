- This function accepts a sorted array and a value

- Create a left pointer at the start of the array, and a right pointer at the end of the array

- while the left pointer comes before the right pointer
  - create a pointer in the middle
  - if you find the value return the index
  - if the value is too small, move the left pointer up
  - if the value is too large move the right pointer down
- if the value is never found return negative 1
