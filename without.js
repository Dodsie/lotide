const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { //does not include
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;