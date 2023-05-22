const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let headless = arr.slice();
  headless.shift();
  return headless;
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

// Other tests to write:
// An array with only one element should yield an empty array for its tail
const one = [1];
assertEqual(tail(one).length, 0);

// An empty array should yield an empty array for its tail
const empty = [];
assertEqual(tail(empty).length, 0);