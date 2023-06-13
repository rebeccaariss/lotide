const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const actualArr = Object.keys(actual);
  const expectedArr = Object.keys(expected);

  if (actualArr.length === expectedArr.length) {
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}!`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }

};

// TEST CODE
assertObjectsEqual({ a: 1, b: 2, c: 3}, { a: 1, b: 2, c: 3});
assertObjectsEqual({}, {});
assertObjectsEqual({ a: [1, 2, 3]}, { a: [1, 2, 3] });
assertObjectsEqual({ fruit: "banana" }, { vegetable: "carrot" });

module.exports = assertObjectsEqual;