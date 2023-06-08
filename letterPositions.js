// Copying and pasting these functions for now per instructions:
const assertArraysEqual = function(arr1, arr2) {
  let same = false;
  // compare each index in arr1 to the corresponding index in arr2
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        same = true;
      } else {
        same = false;
        // this return statement can be eliminated:
        // return same;
      }
    }
  }
  if (same === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
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
  // logic to update results here
  return results;
};

// TEST CODE
