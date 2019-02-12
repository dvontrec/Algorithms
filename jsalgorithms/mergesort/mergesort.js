// Write a function that recieves an array and returns the array sorted using the merge sort method
function mergeSort(arr) {
  // Do stuff
  // if the arry length is less than or equal to 1 return the array
  if (arr.length <= 1) return arr;
  // find middle of array
  let middle = Math.floor(arr.length / 2);
  //splice the array down the middle
  let arr1 = mergeSort(arr.slice(0, middle));
  let arr2 = mergeSort(arr.slice(middle));
  //return merged arr
  return merge(arr1, arr2);
}

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

console.log(mergeSort([65, 44, 1, 2, 9, 8, 3])); // [1,2,3,8,9,44,65]
console.log(mergeSort(['z', 'c', 'a', 'k', 'f'])); // [1,2,3,8,9,44,65]
