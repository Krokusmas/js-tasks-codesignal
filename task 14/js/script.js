'use strict';

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  let currentDiff = 0;

  inputArray.forEach(function(item, i) {
    currentDiff = Math.abs(item - inputArray[i + 1]);
    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
    }
  });

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([10, 11, 13]));
