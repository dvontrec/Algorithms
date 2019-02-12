# Quick Sort

## Pivot

- takes 3 arguments the array, the stary index, and the end index

- grab the pivot from the start of the array

- Store the current pivot index in a variable (to keep track of twhere the pivot should end)

- Loop through the array from the start until the end

  - if the pivot is greater than the current element, increment the pivot index variable then swap the currnt element with the element at the pivot index

- swap the starting element with the pivot index

- return the pivot index

## sort

- call the pivot helper on the array

- recursivley call quicksort on right and left of the pivot index

### base case is if left and right are equal
