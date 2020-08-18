'use strict';

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    let arr = [];
    let longestLength = 0;
    
    inputArray.forEach(function(item, i) {
        if (item.length >= longestLength) {
          arr.push(item);
          longestLength = item.length;
        }
    });
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < arr[arr.length - 1].length) {
        arr.splice(i, 1);
        i = i - 1;
      }
    }
  return arr;
}

console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
