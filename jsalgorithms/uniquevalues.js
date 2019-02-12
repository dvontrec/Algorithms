// Create a function that accepts a sorted array and counts the unique values
// positive and negative numbers

function countUniqueValues(arr) {
  // Do stuff
  // create variables for the pointer
  let pointer1 = 0;
  let pointer2 = 1;
  // creates a variable for the unique total
  let uTotal = 0;

  // For the length of the array
  while (pointer2 <= arr.length) {
    // if pointer 2 is not equal to pointer 1 move pointer 1 and add to the unique total
    if (arr[pointer2] != arr[pointer1]) {
      uTotal++;
      pointer1 = pointer2;
    }
    // move pointer2 after each loop
    pointer2++;
  }

  return uTotal;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
