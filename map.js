const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = map;