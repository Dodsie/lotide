const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  if (!eqObjects(actual,expected)) {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}!`;
  } else {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}!`;
  }
};


module.exports = assertObjectsEqual;
