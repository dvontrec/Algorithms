'use strict';
// Write a function that finds the absolute value of the difference between 2 diagonals given a square matrix
function diagonalDifference(arr) {
  // Do stuff
  // find index of middle
  let middle = arr.length - (arr.length - 1) / 2;
  // create var for diagnal sums
  let diag1 = 0;
  let diag2 = 0;
  // loop through each array add before middle to diag1 and after to diag 2
  arr.forEach((ar, i) => {
    let num = i + 1;
    // creates variable for distance from end
    let disNum = ar.length - num;
    // if middle add to both
    if (num === middle) {
      diag1 += ar[i];
      diag2 += ar[i];
    } else {
      // add numbers to diagonals
      diag1 += ar[i];
      diag2 += ar[disNum];
    }
  });
  // subtract diags and find absv
  // return absolute value of difference
  return Math.abs(diag1 - diag2);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
