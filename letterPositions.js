// Copying and pasting these functions for now per instructions:
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let same = false;
  // compare each index in arr1 to the corresponding index in arr2
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        same = true;
      } else {
        same = false;
        return same;
      }
    }
  }
  return same;
};

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