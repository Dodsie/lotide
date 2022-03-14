const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("should return array of every index but the first", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
  it("should return array of every index but the first", () => {
    assert.deepEqual(tail(['a','b','c']),['b','c']);
  });
  it("should return array of every index but the first", () => {
    assert.deepEqual(tail(['a','b','c']),['a','b']); // should fail.
  });
});
