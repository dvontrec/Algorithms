//  Write a function that accepts an array and a value and returns the index the number is found
function arraySearchLinear(arr, num) {
  // Do stuff
  //loop through the array and return index of matching value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  //if loop is finished return -1
  return -1;
}

console.log(arraySearchLinear([1, 2, 3, 4], 3)); // 2
console.log(arraySearchLinear([1, 7, 18, 4], 10)); // -1
