// Write a function that receives an array of numbers and returns the array sorted using radix
function radixSort(arr) {
  // DO stuff
  // create variable for the most digits in array
  let mostDigit = mostDigits(arr);
  // loop through the max number of digits times
  for (let i = 0; i < mostDigit; i++) {
    // create arrays for each digit
    let digitArray = [[], [], [], [], [], [], [], [], [], []];
    // loop through each number to get the digit at current index
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], [i]);
      // push the digit to the correct bucket
      digitArray[digit].push(arr[j]);
    }
    // recollect buckets into base array
    arr = [].concat(...digitArray);
  }
  return arr;
}
// Write a function that receives an array and a place and returns a number at the given place value
function getDigit(num, place) {
  // DO stuff
  // make variable for base and denom
  let base = 1;
  let denom = 1;
  // for every place multipy base 10 by 10
  for (var i = 0; i <= place; i++) {
    base *= 10;
    denom = base / 10;
  }
  // return the place
  return Math.floor((Math.abs(num) % base) / denom);
}

// Write a function that receives a number and returns the number of digits
function digitCount(num) {
  // DO stuff
  // If num is 0 return 1
  if (num === 0) return 1;
  let x = 10;
  let times = 1;
  // Loop through multiplying by 10 until x is is higher than num
  while (x < Math.abs(num)) {
    times++;
    x = Math.pow(10, times);
  }
  // return the number of digits in the number
  return times;
}

// Write a function that receives an array of number and returns the one with the number of digits in the largest number in the array
function mostDigits(arr) {
  // DO stuff
  // set the base higest digit count to 1
  let mostDigit = 1;
  // loop through the array calling digit count on each digit
  for (let i = 0; i < arr.length; i++) {
    let indexDigitCount = digitCount(arr[i]);
    if (indexDigitCount > mostDigit) {
      mostDigit = indexDigitCount;
    }
  }
  // return the highest number of digits
  return mostDigit;
}

console.log(radixSort([23, 235, 5467, 12, 2345, 9852])); // [ 12, 23, 235, 2345, 5467, 9852 ]
