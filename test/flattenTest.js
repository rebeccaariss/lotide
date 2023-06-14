const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

assertArraysEqual(flatten([1, 2, ['a', 'b', 'c'], 3]), [1, 2, 'a', 'b', 'c', 3]);
assertArraysEqual(flatten([]), undefined);
assertArraysEqual(flatten([[], [], []]), undefined);
assertArraysEqual(flatten([[], [1], []]), [1]);