// Write a function that checks if 2 given strings are anagrams (Contain the same letters)
// All lowercase no spaces

function validAnagram(str1, str2) {
  // do stuff
  // If words are different lengths return false
  if (str1.length != str2.length) return false;
  //Create object for first and second word freq
  var freq1 = {};
  var freq2 = {};
  // Add character freq to objects
  for (char in str1) {
    if (freq1[str1[char]]) {
      freq1[str1[char]]++;
    } else {
      freq1[str1[char]] = 1;
    }
  }
  for (char in str2) {
    if (freq2[str2[char]]) {
      freq2[str2[char]]++;
    } else {
      freq2[str2[char]] = 1;
    }
  }
  // loops through the objects to see if KVPs match
  for (char in freq1) {
    if (freq2[char] != freq1[char]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('something', 'this'));
console.log(validAnagram('test', 'sett')); // true
console.log(validAnagram('aaz', 'zza')); //true
console.log(validAnagram('rat', 'car')); //false
console.log(validAnagram('', '')); // true
console.log(validAnagram('cinema', 'iceman')); // true
console.log(validAnagram('cat', 'cat')); // true
