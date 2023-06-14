// "It should keep going until the callback/predicate returns a truthy value. Callback is provided the item in the array."

const takeUntil = function(array, callback) {
  // Push values to a new array until we reach the point
  // in the original array that has been specified by
  // the callback function. (exclusive of that value)
  const newArr = [];
  for (const value of array) {
    if (callback(value) === true) {
      return newArr;
    } else {
      newArr.push(value);
    }
  }
  return newArr;
};

module.exports = takeUntil;