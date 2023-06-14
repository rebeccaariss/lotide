const assertArraysEqual = require('../assertArraysEqual');

// Check message is printing properly:
// ("Functions that do not return values and instead print out
// messages are more difficult to test using assertions. This
// is because we cannot simply compare their return value to
// an expected value.")
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log("\n –––  NOTE: This next test is supposed to fail:  ––– \n");
assertArraysEqual([1, 2, 3], ['a', 'b', 'c']);