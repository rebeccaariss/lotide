const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

// We have to capture and assign the returned value to a variable, otherwise assertion tests result in "Assertion Failed: [object Object] !== [object Object]":

const result1 = countLetters("hello");
const result2 = countLetters("  ");
const result3 = countLetters("Lighthouse%Labs");

// console.log(result1);
// console.log(result2);
// console.log(result3);

assertEqual(result1["h"], 1);
assertEqual(result1["l"], 2);
assertEqual(result2["  "], undefined);
assertEqual(result3["s"], 2);
assertEqual(result3["i"], 1);
assertEqual(result3[" "], undefined);
assertEqual(result3["%"], 1);