const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
    for (const title of obj[key]) {
      if (title === val) {
        return key;
      }
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const multipleTitles = {
  sciFi: ["The Expanse", "Agents of Shield", "The Mandalorian"],
  comedy: ["Brooklyn Nine-Nine", "The Office", "Marvelous Mrs. Maisel"],
  drama:  ["The Wire", "The Good Wife", "Evil"]
};

assertEqual(findKeyByValue(multipleTitles, "Agents of Shield"), "sciFi");
assertEqual(findKeyByValue(multipleTitles, "The Good Wife"), "drama");
assertEqual(findKeyByValue(multipleTitles, "SpongeBob SquarePants"), undefined);

module.exports = findKeyByValue;