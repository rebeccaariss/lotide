const assertEqual = require('../assertEqual');

console.log("\n –––  NOTE: Every other test in this block is supposed to fail:  ––– \n");

assertEqual("Lighthouse Labs", "Bootcamp"); // should fail
assertEqual(1, 1);
assertEqual(false, 0); // should fail
assertEqual("hello world", "hello world");
assertEqual("it me", "gossip squirrel"); // should fail
assertEqual(3, 3);
assertEqual(7, 5); // should fail

console.log("\n –––  end of expected failed tests for this file  ––– \n");