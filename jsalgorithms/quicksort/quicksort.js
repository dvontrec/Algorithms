// Write a function that accepts an array and sorts it using quick sorted using quick sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  // DO stuff
  // if left is less than right(array isnt sorted)
  if (left < right) {
    let pivotI = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotI - 1);
    //right
    quickSort(arr, pivotI + 1, right);
  }
  // return the array
  return arr;
}

// write a fuction that takes an array and a start and end the nreturns the pivot element and its index in the array
function pivot(arr, start = 0, end = arr.length + 1) {
  // DO stuff
  // grab the pivot fro the start of the array
  let pivot = arr[start];
  // create a varible from less than pivot starts at 1
  let lessThan = start;
  // loop through array to find elements less than pivot
  for (let i = start + 1; i <= end; i++) {
    // if the value is less move it to the right(0 + lessthan)
    if (arr[i] < pivot) {
      lessThan++;
      // swap the elements
      swap(arr, lessThan, i);
    }
  }
  //swap the pivot element with the element at the lessthan index
  swap(arr, start, lessThan);
  return lessThan;
}
// return the array index accepts an array, and the 2 swapped numbers returns the swapped array
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

// function used to swap elements in an array

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3])); // 4
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // 3
