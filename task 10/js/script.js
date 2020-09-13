'use strict';

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

// Example
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.
// The arrays are equal, no need to swap any elements.
// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.
// Any swap of any two elements either in a or in b won't make a and b equal.

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// let a = [1, 2, 3];
// let b = [2, 1, 3];
// let a = [1, 2, 2];
// let b = [2, 1, 1];
// let a = [2, 1, 2, 1, 1, 1, 2];
// let b = [1, 1, 2, 1, 2, 1, 2];
let a = [3, 1, 2, 3, 2];
let b = [1, 1, 2, 3, 1];


function areSimilar(a, b) {
  let c = [];
  let index = [];
  let sum1 = 0;
  let sum2 = 0;

  sum1 = a.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  sum2 = b.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  if (sum1 !== sum2) return false;

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return false;
    }
  } 

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue;
    }
    index.push(i);
    c.push(b[i]);
    if (c.length > 2) {
      return false;
    }
    b[index[0]] = c[1];
    b[index[1]] = c[0];
  }

  return true;
}

console.log(areSimilar(a, b));
