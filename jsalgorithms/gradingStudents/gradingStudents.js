// Write a function that recieves an array of integers and returns an array of intergers rounded using the rounding rules
function gradingStudents(arr) {
  // DO stuff
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the number is at least 38 and the distance from the next 5 is less than 3
    if (arr[i] >= 38 && arr[i] % 5 >= 3) {
      arr[i] = arr[i] + (5 - (arr[i] % 5));
    }
  }
  // Return the array of rounded integers
  return arr;
}

console.log(gradingStudents([73, 67, 38, 33])); // [ 75, 67, 40, 33 ]
