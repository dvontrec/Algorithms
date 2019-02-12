// Write a function, Givern an array of integers and a number, find the maximum sum of a subarray
// subarray length is the numberpassed
// subarray must be consecutive from original array

function maxSubarraySum(arr, num) {
  // DO stuff
  // if the array is shorter than sub array return null
  if (arr.length < num) {
    return null;
  }
  // Create sum to be zero
  let sum = 0;
  // add first (num) numbers from array to sum
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  // set max to sum
  let max = sum;
  let temp = sum;
  // determine subarray sum by removing first index and sliding to the right
  for (let j = num; j < arr.length; j++) {
    // Set temp to be max subarray sum shifted right
    temp += arr[j] - arr[j - num];
    //if temp is greater than max set new max
    max = Math.max(temp, max);
  }
  //return the max
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
