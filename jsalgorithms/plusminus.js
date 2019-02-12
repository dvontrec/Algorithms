//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
// Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
  //Do Stuff
  // create object for pos, neg, and zeroes
  let freq = {
    pos: 0,
    neg: 0,
    zero: 0
  };
  // save array length for ease of access
  let len = arr.length;
  //loop through the array adding freqs
  arr.forEach(num => {
    if (num < 0) {
      freq['neg']++;
    }
    if (num > 0) {
      freq['pos']++;
    }
    if (num == 0) {
      freq['zero']++;
    }
  });
  // print positives over total
  console.log(freq['pos'] / len);
  // print negative over total
  console.log(freq['neg'] / len);
  // print zero over total
  console.log(freq['zero'] / len);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
