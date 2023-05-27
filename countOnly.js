// Copying and pasting this function for now per instructions:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const toCheck = [];
  const result = {};
  // check object key
  // would it be more appropriate to call the variable here key or value? this is worth asking about - consider what you're accessing here:
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      toCheck.push(key);
    }
  }
  // if value === true, we should check how many instances of this [key?] there are in the array (allItems)
  //forEach for doing something to each index in array
  for (const name of toCheck) {
    allItems.forEach(element => {
      if (name === element) {
        result[name] += 1;
      }
    });
    return Object.keys(result);
  }

  //this is actually helpful:
  // const findWaldo = function(names, found) {
  //   for (let i = 0; i < names.length; i++) {
  //     let name = names[i];
  //     if (name === "Waldo") {
  //       found();   // execute callback
  //     }
  //   }
  // }
  

  // create and return a new object containing the [keys?] that were to be counted and how many instances of that key were found in the array


};

// start to practice implementing arrow functions too re: lecture

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

console.log(countOnly(firstNames, firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
