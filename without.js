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
const without = function(source, itemsToRemove) {
  const updated = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      updated.push(item);
    }
  }
  return updated;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// Test below currently fails. Why? Related to objects?
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

// Ensure the original array has not been modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);