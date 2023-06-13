const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({ "fiction": 18, "non-fiction": 22 }, x => x.fiction === 8), undefined);

module.exports = findKey;