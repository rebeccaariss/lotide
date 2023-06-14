const assertArraysEqual = require('./assertArraysEqual');
const letterPositions = require('../letterPositions');

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello world").l, [2, 3, 8]);

// Note for refactor:
// Currently we can't use assertArraysEqual to ensure that the argument " " does not create a key in results.
// (This is because there will be no array created, and this assertion compares arrays).
// Import assertEqual or write new test code to test for this on refactor.