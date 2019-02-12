// Wrute a function that recieves an array and returns a sorted array using insertion sort
function insertionSort(arr) {
  // Do stuf

  // loop through the rest of the array until the pointer is the length of the array
  for (let i = 1; i < arr.length; i++) {
    // grabs the array element at the current index
    let x = arr[i];
    // loops through the sorted array and inserts current element into the sorted array at next smallest
    for (var j = i - 1; j >= 0 && arr[j] > x; j--) {
      // shift array elements over to the right
      arr[j + 1] = arr[j];
    }
    // insert in next lowest point
    arr[j + 1] = x;
  }

  // Return the sorted array
  return arr;
}

console.log(insertionSort([3, 1, 4, 12, -1, -8, 103, 6, 33, 5, 11, 2, 58, 0])); // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 11, 12, 33, 58, 103 ]
console.log(insertionSort([1, 2, 3, 5, 4, 1, 6])); // [ 1, 2, 3, 4, 5, 6 ]
