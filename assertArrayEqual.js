const eqArrays = require('./eqArrays');

const assertArrayEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: ${arrayOne} === ${arrayTwo}!`);
  } else if (arrayOne !== arrayTwo) {
    console.log(`❌❌❌Assertion Failed: ${arrayOne} !== ${arrayTwo}!`);
  }
};

module.exports = assertArrayEqual;