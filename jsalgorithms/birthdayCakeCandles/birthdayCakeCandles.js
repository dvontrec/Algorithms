// Write a function that given an array of intergers returns the frequency of the highest interger
function birthdayCakeCandles(arr) {
  // DO stuff
  // create an object for storing frequencies
  let freq = {};
  // loop through array and add or increment key
  arr.forEach(num => {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  });
  // create variable to store max number
  let highFreq = 0;
  // loops through keys in freq for highest value
  for (let num in freq) {
    // if the value is higher than the current max set new max
    if (freq[num] > highFreq) {
      highFreq = freq[num];
    }
  }
  // return highest frequency
  return highFreq;
}

console.log(birthdayCakeCandles([4, 4, 1, 3], 2)); // 2
console.log(birthdayCakeCandles([3, 2, 1, 3], 2)); // 2
