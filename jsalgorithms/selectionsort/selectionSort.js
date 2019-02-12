// write a function that recieves an array then implements a selection sort to return a sorted array
function selectionSort(arr) {
  // Do stuff
  // set a pointer that will move from zero to the last index of the array
  let pointer = 0;
  // loop until the pointer is the final index
  while (pointer < arr.length) {
    let min = pointer;
    // loop through the array from beginning to end
    for (let i = pointer; i < arr.length; i++) {
      // swap if the current index is less than the minimum
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    // if pointer is not the min
    if (pointer != min) {
      // swap the min with the pointer
      let temp = arr[pointer];
      arr[pointer] = arr[min];
      arr[min] = temp;
    }
    // increment the pointer
    pointer++;
  }
  // return the array sorted
  return arr;
}

console.log(selectionSort([3, 1, 4, 12, -1, -8, 103, 6, 33, 5, 11, 2, 58, 0])); // [ -8, -1, 0, 1, 2, 3, 4, 5, 6, 11, 12, 33, 58, 103 ]
console.log(selectionSort([1, 2, 3, 5, 4, 1, 6])); // [ 1, 2, 3, 4, 5, 6 ]
