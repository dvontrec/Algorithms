// function that recieves an array and returns the array sorted
function bubbleSort(arr) {
  // DO stuff
  // loops through from end of array to the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    // loop through array from the beginning to i
    for (let j = 0; j < i; j++) {
      //if arr[j] is greater than j[i] swap them
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // return sorted array
  return arr;
}
function optimizedBubbleSort(arr) {
  // DO stuff
  // create a variable to see if we swapped last loop
  let swapped = true;
  // loops through from end of array to the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    // swap is false until we swap
    swapped = false;
    // loop through array from the beginning to i
    for (let j = 0; j < i; j++) {
      //if arr[j] is greater than j[i] swap them
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    // if no swaps break
    if (!swapped) {
      break;
    }
  }
  // return sorted array
  return arr;
}

console.log(bubbleSort([3, 1, 4, 12, -1, -8, 103, 6, 33, 5, 11, 2, 58, 0])); // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 11, 12, 33, 58, 103 ]
console.log(
  optimizedBubbleSort([3, 1, 4, 12, -1, -8, 103, 6, 33, 5, 11, 2, 58, 0]) // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 11, 12, 33, 58, 103 ]
);
console.log(bubbleSort([1, 2, 6, 3, 5, 4, 6])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(optimizedBubbleSort([1, 2, 3, 5, 4, 6])); // [ 1, 2, 3, 4, 5, 6 ]
