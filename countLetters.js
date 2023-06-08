// Copying and pasting this function for now per instructions:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const countLetters = function(sentence) {
  //regex expression learned from https://futurestud.io/tutorials/remove-extra-spaces-from-a-string-in-javascript-or-node-js :
  let spacelessSentence = sentence.replace(/\s+/g, ' ').trim();
  const results = {};

  // for...of does not include spaces in the count:
  // NOTE: did need regex above despite this note about for...of from Compass. The two things seem to be needed in combination. Revisit at refactor.
  for (const letter of spacelessSentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

// TEST CODE
// We have to capture and assign the returned value to a variable, otherwise assertion tests result in "Assertion Failed: [object Object] !== [object Object]":

const result1 = countLetters("hello");
const result2 = countLetters("  ");
const result3 = countLetters("Lighthouse%Labs");

console.log(result1);
console.log(result2);
console.log(result3);

assertEqual(result1["h"], 1);
assertEqual(result1["l"], 2);
assertEqual(result2["  "], undefined);
assertEqual(result3["s"], 2);
assertEqual(result3["i"], 1);
assertEqual(result3[" "], undefined);
assertEqual(result3["%"], 1);

// Note: Not part of the assignment, but for later refactoring: exclude symbols like "% or "$" from the count