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
// return a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE
assertArraysEqual(map([2, 3, 4, 5], x => x % 2), [0, 1, 0, 1]);
assertArraysEqual(map(['apple', 'banana'], x => x[1]), ['p', 'a']);
assertArraysEqual(map(['1', '2'], x => Number(x)), [1, 2]);