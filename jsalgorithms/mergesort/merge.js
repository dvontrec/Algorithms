// Write a function that loops through 2 sorted arrays and returns the combined sorted array
function merge(arr1, arr2) {
  // DoStuff
  // create empty array to hold final sorted array
  let arr = [];
  // create pointers for array index
  let i = 0;
  let j = 0;
  // loop through 2 arrays inserting smallest values first
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  // push remaining values to the returned array
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  // return merged array
  return arr;
}

console.log(merge([1, 5], [3, 4, 6])); // [1,3,4,5]
