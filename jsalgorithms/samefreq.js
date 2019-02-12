// Write a function, given 2 positive intergers, find out if the two numbers have the same frequency of digits
// function must have complexities:
// Time O(N)
function sameFrequency(num1, num2) {
  // DO stuff
  // convert intergers to strings
  num1 = num1.toString();
  num2 = num2.toString();
  // if number lengths arent the same return false
  if (num1.length != num2.length) {
    return false;
  }
  // Create object for num 1 freq
  let freq = {};
  // loop through num1 to populate freq object
  for (let num in num1) {
    let number = num1[num];
    if (freq[number]) {
      freq[number]++;
    } else {
      freq[number] = 1;
    }
  }
  // loop through number 2 to find if keys match nums
  for (let num in num2) {
    let number = num2[num];
    if (!freq[number]) {
      return false;
    } else {
      freq[number] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //true
