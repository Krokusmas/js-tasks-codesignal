'use strict';

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// Example
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

let a = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(a) {
  let arr = a.concat();
  let treesIndex = [];
  let lastIndex = -1;

  while ((lastIndex = arr.indexOf(-1, lastIndex + 1)) !== -1) {
    treesIndex.push(lastIndex);
  }
  function sortNumASC (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  arr.sort(sortNumASC);
  arr.splice(0, treesIndex.length);
 
  for (let i = 0; i < treesIndex.length; i++) {
    arr.splice(treesIndex[i], 0, -1);
  }
  return arr;
}

console.log(sortByHeight(a));
