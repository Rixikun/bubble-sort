// function helpCount(num1, num2) {
//   if (num1 > num2) {
//     return { smaller: num2, larger: num1 };
//   } else return { smaller: num1, larger: num2 };
// }

// function bubbleSort(array) {
//   let paired;
//   for (let j = array.length; j > 0; j--) {
//     for (let i = 0; i < j - 1; i++) {
//       if (i === array.length - 1) {
//         array[i];
//       } else {
//         paired = helpCount(array[i], array[i + 1]);
//         array[i] = paired.smaller;
//         array[i + 1] = paired.larger;
//       }
//     }
//   }
//   return array;
// }

function bubbleSort(array) {
  let i = 0;
  let length = array.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    i = 0;
    while (i < length) {
      if (array[i + 1] < array[i]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
      i++;
      // length--;
    }
  }
  return array;
}
