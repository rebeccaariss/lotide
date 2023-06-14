const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: 1, b: 2, c: 3}, { a: 1, b: 2, c: 3});
assertObjectsEqual({}, {});
assertObjectsEqual({ a: [1, 2, 3]}, { a: [1, 2, 3] });
assertObjectsEqual({ fruit: "banana" }, { vegetable: "carrot" });