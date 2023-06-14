# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production*grade software.**

This project was created and published by me (@rebeccaariss) as part of my studies at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rebeccaariss/lotide`

**Require it:**

`const _ = require('@rebeccaariss/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Returns "true" if two given arrays are equal and "false" if they are not.
* `assertEqual`: Returns "true" if two values (of any primitive type) are strictly equal and "false" if they are not.
* `assertObjectsEqual`: Returns "true" if two given objects are equal and "false" if they are not.
* `countLetters`: Returns the number of letters in a string (exclusive of spaces).
* `countOnly`: Given an array of values (first argument), returns a count for only those values specified in second argument (an object containing booleans to indicate which array values should be counted).
* `eqArrays`: Returns "true" if two given arrays are equal and "false" if they are not. This is required for *assertArraysEqual* to work properly, as we cannot compare arrays directly in the way we can for primitive values. (*eqArrays* includes logic for iterating over & comparing arrays; *assertArraysEqual* performs the final assertion).
* `eqObjects`: Returns "true" if two given objects are equal and "false" if they are not. This is required for *assertObjectsEqual* to work properly, as we cannot compare objects directly in the way we can for primitive values. (*eqObjects* includes logic for iterating over & comparing objects; *assertObjectsEqual* performs the final assertion).
* `findKey`: Returns the first instance of a key whose value matches the conditional specified within provided callback function.
* `findKeyByValue`: This essentially searches through an object for a provided value. When the value is found, function returns the key that it is assigned to.
* `flatten`: Converts a two-dimensional (nested) array to a one-dimensional (flattened) array.
* `head`: Returns only the first element (index 0) of a given array.
* `letterPositions`: Returns an array containing every instance (by index) of a specified letter in a given string.
* `map`: Executes a given callback function on each element of a given array & returns a new array containing the results.
* `middle`: Returns the middle values of a given array (one value for an array with an odd number of elements; two values for an array with an even number of elements; an empty array for an array with 0 or 1 element[s]).
* `tail`: Returns all elements of a given array minus the first element (index 0).
* `takeUntil`: From a given array, return a new array containing each element of the original up until the point that a given callback function returns a truthy value (exclusive of the element that resulted in a truthy value).
* `without`: From a given array, returns a new array minus the elements specified in a second array.