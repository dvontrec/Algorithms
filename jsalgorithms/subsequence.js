// Write a function, takes 2 strings and checks whether the characters in the first string form a
// subsequence of the characters in the second string without the order changing
function isSubsequence(sub, str) {
  // DO stuff
  //if substring is longer than the string return false
  if (sub.length > str.length) {
    return false;
  }
  // Create pointers for string1 and string 2
  let pointer1 = 0;
  let pointer2 = 0;
  // Loop through each string checking for order matching
  let letter = sub[pointer1];
  while (pointer2 < str.length) {
    //if the letters match move pointer1 up one
    if (str[pointer2] == sub[pointer1]) {
      pointer1++;
    }
    //if pointer 1 at max return true
    if (pointer1 == sub.length) {
      return true;
    }
    pointer2++;
  }
  // If no match returnfalse
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
