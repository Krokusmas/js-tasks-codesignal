// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing 
// sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence 
// containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can 
// remove 2 to get the strictly increasing sequence [1, 3].

function almostIncreasingSequence(arr) {
  let acc = 0;
  let badElem = 0;
  let array = [];
  array = arr.concat();
  let double = [];
  
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] === array[i + 1] && array[i] > array[i + 1]) {
      acc += 1;
      array.splice(i + 1, 1);
    }
    if (array[i - 1] < array[i + 1] && array[i] > array[i + 1]) {
      acc += 1;
      array.splice(i, 1);
    }
    if (acc > 1) {
      return false;
    }
  }


  for (let j = 0; j <= array.length; j++) {
    let elem = array[j];
    let position = array.indexOf(elem);

    while (position != -1) {
      double.push(position);
      position = array.indexOf(elem, position + 1);
    }

    if (double.length < 2) {
      double.length = 0;
    }
    if (double.length === 2) {
      acc += 1;
      array.splice(double[1], 1);
      double.length = 0;
    }
    if (double.length > 2 ) {
      return false;
    }
    if (acc > 1) {
      return false;
    }
  }

console.log(array);

  for (let i = 0; i <= 1; i++) {

    for (let k = 0; k <= array.length - 2; k++) {
      if (array[k] < array[k + 1]) continue;
        acc += 1;
        array.splice(array.indexOf(array[k]), 1);
      if (acc > 1) {
        return false;
      }
    }
  }



  return true;
}

console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
// [1, 3, 2, 1]
// [1, 3, 2]
// [1, 2, 1, 2]
// [3, 6, 5, 8, 10, 20, 15]
// [1, 1, 2, 3, 4, 4]
// [1, 4, 10, 4, 2]
// [10, 1, 2, 3, 4, 5]
// [1, 1, 1, 2, 3]
// [0, -2, 5, 6]
// [1, 2, 3, 4, 5, 3, 5, 6]
// [40, 50, 60, 10, 20, 30]
// [1, 1]
// [1, 2, 5, 3, 5]
// [1, 2, 5, 5, 5]
// [10, 1, 2, 3, 4, 5, 6, 1]
// [1, 2, 3, 4, 3, 6]
// [1, 2, 3, 4, 99, 5, 6]
// [123, -17, -5, 1, 2, 3, 12, 43, 45]
// [3, 5, 67, 98, 3]
