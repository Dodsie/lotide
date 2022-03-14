const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it("should return middle on any given array, (even) both even numbers", () => {
    assert.deepEqual(middle(['a','b','c']),['b']);
  });
  it("should return middle on any given array, (even) both even numbers", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it("should return middle on any given array, (even) both even numbers", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,5]); // should fail
  });
});
