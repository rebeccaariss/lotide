// Copying and pasting this function for now per instructions:
const assertArraysEqual = function(arr1, arr2) {
  let same = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        same = true;
      } else {
        same = false;
      }
    }
  }
  if (same === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Copying and pasting this function for now per instructions:
// (Commented out because did not use):
// const eqArrays = function(arr1, arr2) {
//   let same = false;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         same = true;
//       } else {
//         same = false;
//         return same;
//       }
//     }
//   }
//   return same;
// };

// FUNCTION IMPLEMENTATION
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[Math.floor((arr.length - 1) / 2)]];
  } else {
    return [arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor(arr.length / 2)]];
  }
};

// TEST CODE
// For arrays with one or two elements, there is no middle. Return an empty array.
// Note: assertArraysEqual function needs to be refactored to
// handle empty arrays.
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);