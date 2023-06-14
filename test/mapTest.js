const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

assertArraysEqual(map([2, 3, 4, 5], x => x % 2), [0, 1, 0, 1]);
assertArraysEqual(map(['apple', 'banana'], x => x[1]), ['p', 'a']);
assertArraysEqual(map(['1', '2'], x => Number(x)), [1, 2]);