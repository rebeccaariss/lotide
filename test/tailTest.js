const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an empty array for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});