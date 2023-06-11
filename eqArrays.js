// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  let same = false;
  if (arr1.length === 0 && arr2.length === 0) {
    same = true;
    return same;
  }
  // compare each index in arr1 to the corresponding index in arr2
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        same = true;
      } else {
        same = false;
        return same;
      }
    }
  }
  return same;
};

module.exports = eqArrays;