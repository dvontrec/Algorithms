//  Write a function, given a sorted array of ints and a target average determines if a pair of values average to the target, may be more than one pair
function averagePair(arr, target) {
  // DO stuff
  if (arr.length < 1) {
    return false;
  }
  // set the pointers
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  // while pointer1 is less than pointer2
  while (arr[pointer1] < arr[pointer2]) {
    let avg = (arr[pointer1] + arr[pointer2]) / 2;
    // if they are equal return true
    if (avg == target) {
      return true;
    }
    // if the average is less, move pointer1 up
    else if (avg < target) {
      pointer1++;
    }
    // if average is more move pointer 2 down
    else if (avg > target) {
      pointer2--;
    }
  }
  // once loop is exited return false target was not met
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // flase
console.log(averagePair([], 4)); // false
