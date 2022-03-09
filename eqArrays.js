const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}!`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}!`);
  }
};
 
const eqArrays = function(arrayOne,arrayTwo) {
  let lengthArrOne = arrayOne.length;
  let lengthArrTwo = arrayTwo.length;
  let stringArrOne = '';
  let stringArrTwo = '';
  for (let i = 0; i < arrayOne.length; i++) {
    stringArrOne = arrayOne[i];
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    stringArrTwo = arrayTwo[j];
  }
  if (stringArrOne === stringArrTwo && lengthArrOne === lengthArrTwo) {
    return true;
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);