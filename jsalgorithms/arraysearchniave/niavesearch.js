// write a function that recieves a string and a shorter string to see if string contains the substring
function niaveSearch(str, substr) {
  // Do stuff
  // create a variable to store the count
  let count = 0;
  // loops over the longer string
  for (let i = 0; i < str.length; i++) {
    // create a variable for the index of the substring
    let j = 0;
    //loops over the shorter string
    while (j < substr.length) {
      // Create a reference to the current step in longer string
      let num = j + i;
      // if the characters dont match break
      if (substr[j] != str[num]) {
        break;
      }
      j++;
    }
    // if j is 2 count goes up 1
    if (j === substr.length) {
      count++;
    }
  }
  // return the count
  return count;
}

console.log(niaveSearch('hello', 'lo')); // 1
console.log(niaveSearch('zowoomgzomglol', 'omg')); // 2
console.log(
  niaveSearch(
    'this is a test, i am actually looking for the space then tees',
    ' t'
  )
); // 4
