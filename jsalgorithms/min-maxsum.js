// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers
function miniMaxSum(arr) {
  // DO stuff
  // create variable for min and max numbers
  let arrMin = Infinity;
  let arrMax = -Infinity;
  // create arrsum value
  let sum = 0;
  // find sum of entire array and min and max number
  arr.forEach(num => {
    //check if the num is lower than min
    if (num < arrMin) {
      arrMin = num;
    }
    //check if number is higher than max
    if (num > arrMax) {
      arrMax = num;
    }
    //add number to sum
    sum += num;
  });
  // set min and max to the sum of array minus min/max number
  let min = sum - arrMax;
  let max = sum - arrMin;
  // print results
  console.log(min + ' ' + max);
}

miniMaxSum([1, 3, 5, 7, 9]); // 16 24
miniMaxSum([1, 2, 3, 4, 5]); // 10 14
miniMaxSum([7, 69, 2, 221, 8974]); // 299 9271
