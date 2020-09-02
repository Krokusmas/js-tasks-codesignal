'use strict';

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// Example
// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// Короткое решение

function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

// Длинное решение

// ф-я, которая получает две переменных и строку, и возвращает строку наоборот между этих двух переменных.
// function getStrPiece (secondBracketPos, arr) {
//   let arr2 = [];

//   for (let a = 1; a < secondBracketPos; a++) {
//     arr2.push(arr[a]);
//   }
//   return arr2.reverse().join('');
// }

// ф-я, которая получает отрезок массива с первой скобки, включает цикл  ищет вторую скобку. Находит позицию второй скобки и запускaет функцию выше для выдачи строки наоборот.
// function getSecondBracket (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ')') {
//       return getStrPiece(i, arr);
//     }
//   }
// }

// function reverseInParentheses(inputString) {
//   let arr = inputString.split('');
//   let arr2 = [];
//   let c = 0;
//   let d = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '(') {
//       for (let j = i + 1; j < arr.length; j++) {

//         if (arr[j] === "(") {
//           c = getSecondBracket(arr.slice(j));
//           arr.splice(j, c.length + 2);
//           arr.splice(j, 0, c);
//           arr = arr.join('');
//           arr = arr.split('');
//           i = 0;
//           arr2 = [];
//           break;
//         }

//         if (arr[j] !== ')') {
//           arr2.push(arr[j]);
//         }
//         if (arr[j] === ')') {
//           d = arr2.reverse().join('');
//           arr.splice(i, d.length + 2);
//           arr.splice(i, 0, d).join('');
//           i = 0;
//           arr2 = [];
//           break;
//         }
//       }
//     }
//   }
//   return arr.join('');
// }


console.log(reverseInParentheses("nd(op(ug)aw)eht"));
