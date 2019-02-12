'use strict';
// Write a recursive function that returns a base number to the given power
function power(num, x) {
  // DO stuff
  // if power is 0 return 1
  if (x === 0) {
    return 1;
  }
  // return num times num to the power of x -1
  return num * power(num, x - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
