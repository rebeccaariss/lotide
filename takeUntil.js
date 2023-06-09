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
// "It should keep going until the callback/predicate returns a truthy value. Callback is provided the item in the array."

const takeUntil = function(array, callback) {
  // Push values to a new array until we reach the point
  // in the original array that has been specified by
  // the callback function. (exclusive of that value)
  const newArr = [];
  for (const value of array) {
    if (callback(value) === true) {
      return newArr;
    } else {
      newArr.push(value);
    }
  }
  return newArr;
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// For refactoring: How do we handle the first two tests here?
// (Nothing shows in terminal, just blank on either side of !==).
// Throw an error? But how do we use the assertion test then?
assertArraysEqual(takeUntil([], x => x > 10), []);
assertArraysEqual(takeUntil([11, 10, 9], x => x > 10), []);
assertArraysEqual(takeUntil([1, 2, 3], x => x > 10), [1, 2, 3]);