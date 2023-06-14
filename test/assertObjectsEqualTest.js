const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: 1, b: 2, c: 3}, { a: 1, b: 2, c: 3});
assertObjectsEqual({}, {});
assertObjectsEqual({ a: [1, 2, 3]}, { a: [1, 2, 3] });
console.log("\n –––  NOTE: This next test is supposed to fail:  ––– \n");
assertObjectsEqual({ fruit: "banana" }, { vegetable: "carrot" });
console.log("\n");