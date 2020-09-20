'use strict';

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
    let str = inputString;
    let arr = str.split('');
    let arrSorted = arr.sort(function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    });
    let flag = 0;

    for (let i = 0; i < arrSorted.length; i ++) {
        if (arrSorted[i] === arrSorted[i + 1]) {
            i = i + 1;
        } else {
            flag += 1;
        }
        if (flag > 1) {
            return false;
        }
    }
    return true;
}

console.log(palindromeRearranging('abcabced'));
