const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  const updated = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      updated.push(item);
    }
  }
  return updated;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// Test below currently fails. Why? Related to objects?
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

// Ensure the original array has not been modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;