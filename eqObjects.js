// Copying and pasting this function for now per instructions:
const eqArrays = function(arr1, arr2) {
  let same = false;
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);

  if (obj1Arr.length === obj2Arr.length) {
    for (const key of obj1Arr) {
      // If the values compared below do not match, we will first want to check if they are arrays (next code block):
      // This is because it is possible to have two arrays which appear identical, but because of the nature of arrays, are not.
      if (object1[key] !== object2[key]) {
        // If the value associated with current iteration (key) for object1 is an array, then we enter
        // into the next block which will check if they are equal (ergo also checking if object2[key] is an array):
        if (Array.isArray(object1[key])) {
          // Check if arrays stored at key are the same. If not, we break out of execution altogether:
          if (eqArrays(object1[key], object2[key]) === false) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    // If code execution makes it to this point, that means we've completed all necessary checks and
    // the two objects are equal (so we return true):
    return true;
  }
  // If the array lengths are not equal, this automatically means the objects are not equal
  // because they have a different number of keys. We don't even need to enter into checks and
  // can therefore return false:
  return false;
};

// TEST CODE
const shirtObject = { colour: "red", size: "medium" };
const anotherShirtObject = { size: "medium", colour: "red" };
const longSleeveShirtObject = { size: "medium", colour: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false