// write a function that adds the sum of all numbers in a range from zero to the given number
function recursiveRange(num) {
  // Do something
  // if the number is zero return 0
  if (num === 0) {
    return 0;
  }
  // return num plus the value of recursiveRange(num-1)
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
