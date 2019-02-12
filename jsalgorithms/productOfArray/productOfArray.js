// Write a function that returns the product of every value in an array of numbers
function productOfArray(arr) {
  // DO stuff
  // if the array length is 0 return 1
  if (arr.length === 0) {
    return 1;
  }
  // return array[0] multiplied by the value of productOfArray on the array with the first element taken off
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
