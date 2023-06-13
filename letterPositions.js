const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {

  const results = {};

  let spacelessSentence = sentence.replaceAll(" ", "");

  for (let i = 0; i < spacelessSentence.length; i++) {
    if (results[spacelessSentence[i]]) {
      results[spacelessSentence[i]].push(i);
    } else {
      results[spacelessSentence[i]] = [i];
    }
  }
    
  return results;
};

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello world").l, [2, 3, 8]);

// Note for refactor:
// Currently we can't use assertArraysEqual to ensure that the argument " " does not create a key in results.
// (This is because there will be no array created, and this assertion compares arrays).
// Import assertEqual or write new test code to test for this on refactor.

module.exports = letterPositions;