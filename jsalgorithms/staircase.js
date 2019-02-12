// Write a program that prints a staircase of size n
function staircase(n) {
  // DO stuff
  //set pointer for current step count
  let pointer = n - 1;
  // loop up to n
  while (pointer >= 0) {
    //create string to be printed
    let level = '';
    // loop through printing space for pointer number and hash for n minus pointer
    for (let i = 0; i < n; i++) {
      if (i < pointer) {
        level = level + ' ';
      } else {
        level = level + '#';
      }
    }
    // print level
    console.log(level);
    // descrease pointer
    pointer--;
  }
}

staircase(6);
//       #
//      ##
//     ###
//    ####
//   #####
//  ######

staircase(10);
//          #
//         ##
//        ###
//       ####
//      #####
//     ######
//    #######
//   ########
//  #########
// ##########
