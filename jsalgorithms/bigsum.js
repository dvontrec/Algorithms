// Calculate and return the sum of the elements in an array,
// keeping in mind that some of those integers may be quite large.
function aVeryBigSum(arr) {
  // Do stuff
  // create variable for sum
  let sum = 0;
  // loop through to add to sum
  arr.forEach(num => {
    sum += num;
  });
  // log out sum
  return sum;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
); // 5000000015
