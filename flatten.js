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
const flatten = function(arr) {
  const updated = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        updated.push(element[i]);
      }
    } else {
      updated.push(arr[element]);
    }
  }
  return updated;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, ['a', 'b', 'c'], 3]), [1, 2, 'a', 'b', 'c', 3]);
// The following tests fail because of the assertArraysEqual
//function ("Cannot read property 'length' of undefined"):
assertArraysEqual(flatten([]), undefined);
assertArraysEqual(flatten([[], [], []]), undefined);
assertArraysEqual(flatten([[], [1], []]), [1]);

// assertArraysEqual to be refactored at a later date.