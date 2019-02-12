// Write a function that checks if 2 given strings are anagrams (Contain the same letters)
// All lowercase no spaces

function validAnagram(str1, str2) {
  // do stuff
  // If words are different lengths return false
  if (str1.length != str2.length) return false;
  //Create object for first and second word freq
  var freq = {};
  // Add character freq to objects
  for (char in str1) {
    if (freq[str1[char]]) {
      freq[str1[char]]++;
    } else {
      freq[str1[char]] = 1;
    }
  }
  // loops through the objects and removes the key as the second word has the letter
  for (char in str2) {
    let letter = str2[char];
    if (!freq[letter]) {
      return false;
    } else {
      freq[letter] -= 1;
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
