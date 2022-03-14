const eqArrays = function(arrayOne,arrayTwo) {
  let lengthArrOne = arrayOne.length;
  let lengthArrTwo = arrayTwo.length;
  if (lengthArrOne !== lengthArrTwo) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};
const assertArrayEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: ${arrayOne} === ${arrayTwo}!`);
  } else if (arrayOne !== arrayTwo) {
    console.log(`❌❌❌Assertion Failed: ${arrayOne} !== ${arrayTwo}!`);
  }
};


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { //does not include
      newArray.push(source[i]);
    }
  }
  return newArray;
};
//try with filter
// let test1 = ['b', 'd', 1];
// let test2 = ['b', 'd', 1];
// let test3 = ['g', 'g', 1];
// assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArrayEqual(without(test2, test1), []);
// assertArrayEqual(without(test2, test2), []);
module.exports = without;