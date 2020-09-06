'use strict';

// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

let a = [50, 60, 60, 45, 70];

function alternatingSums(a) {
    let arr1 = [];
    let arr2 = [];
    let res = [];
    
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            arr1.push(a[i]);
        } else {
          arr2.push(a[i]);
        }
    }
    arr1 = arr1.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    arr2 = arr2.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    res.push(arr1);
    res.push(arr2);
    return res;
}

console.log(alternatingSums(a));
