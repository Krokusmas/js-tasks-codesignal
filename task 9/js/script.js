'use strict';

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
// For
// picture = ["abc",
//            "ded"]
// the output should be
// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

let a = ["abc",
         "ded",
         "12d",
         "%^("]

function addBorder(picture) {
  let res = [];
  let asterisks = '';

  res = picture.map(function(item) {
    return item.replace(/(.*)/, '\*$&\*');
  });
  for (let i = 0; i < res[0].length; i++) {
      asterisks += '*';
  }
  res.unshift(asterisks);
  res.push(asterisks);
  return res;
}

console.log(addBorder(a));
