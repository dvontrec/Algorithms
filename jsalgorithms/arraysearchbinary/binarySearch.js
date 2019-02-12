// write a function that accepts an array and a value and returns the values index in the given array
function binarySearch(arr, val) {
  // DO stuff
  // create left and right pointers
  let lPointer = 0;
  let rPointer = arr.length - 1;
  // while left pointer is less than right pointer
  while (lPointer < rPointer) {
    // look at the middle right minus ((right minus left)/2 *rounded down*)
    let middle = rPointer - Math.floor((rPointer - lPointer) / 2);
    // if middle is the value index return middle
    if (arr[middle] === val) {
      return middle;
    }
    //if middle is too high move right pointer
    if (arr[middle] > val) {
      rPointer = middle;
    }
    //if middle is too low move left pointer
    if (arr[middle] < val) {
      lPointer = middle;
    }
  }
  // return -1 if value is not found
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      4,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      4,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    100
  )
); // -1
