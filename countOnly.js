const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// create and return a new object containing the [keys?] that were to be counted and how many instances of that key were found in the array

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// console.log(countOnly(firstNames, firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
