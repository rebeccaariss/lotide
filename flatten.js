const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const flatten = function(arr) {
  const updated = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        updated.push(element[i]);
      }
    } else {
      updated.push(arr[element]);
    }
  }
  return updated;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, ['a', 'b', 'c'], 3]), [1, 2, 'a', 'b', 'c', 3]);
// The following tests fail because of the assertArraysEqual
//function ("Cannot read property 'length' of undefined"):
assertArraysEqual(flatten([]), undefined);
assertArraysEqual(flatten([[], [], []]), undefined);
assertArraysEqual(flatten([[], [1], []]), [1]);

// assertArraysEqual to be refactored at a later date.

module.exports = flatten;