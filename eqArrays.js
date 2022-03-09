const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}!`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}!`);
  }
};
 
const eqArrays = function(arrayOne,arrayTwo) {
  lengthArrOne = arrayOne.length;
  lengthArrTwo = arrayTwo.length;
  let stringArrOne = '' 
  let stringArrTwo = ''
  //console.log(stringArrOne);
  //console.log(stringArrTwo);
  //console.log(lengthArrOne);
  //console.log(lengthArrTwo);
  for (let i = 0; i < arrayOne.length; i++) {
    stringArrOne = arrayOne[i]
    console.log(stringArrOne)
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    stringArrTwo = arrayTwo[j]
    console.log(stringArrTwo);
  }
  if (stringArrOne === stringArrTwo && lengthArrOne === lengthArrTwo) {
    console.log(true)
    return true;
  } else {console.log(false)};
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);