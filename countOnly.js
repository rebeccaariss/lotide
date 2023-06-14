// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// create and return a new object containing the values that were to be counted and how many instances of the corresponding key were found in the array

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

module.exports = countOnly;