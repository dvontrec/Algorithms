// Write a function that returns he product of an integer and all integers down to 1
function factorial(num) {
  // DO stuff
  //if the num is 1 return 1
  if (num <= 1) {
    return 1;
  }
  // return num times the result of factorial(num-1)
  return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
