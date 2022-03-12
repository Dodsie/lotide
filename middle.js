// TEST/ASSERTION FUNCTIONS

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

// ACTUAL FUNCTION
const middle = function(arr) {
  let mid = [];
  if (arr.length === 1 || arr.length === 2) {
    mid = [];
  }   else if (arr.length % 2 === 1) {
    mid.push(arr[Math.floor(arr.length / 2)]);
  }   else if (arr.length % 2 === 0) {
    mid.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  }
  return mid;
}; //END OF FUNCTION!
assertArrayEqual(middle([1]), []); // => []
assertArrayEqual(middle([1, 2]),[]); // => []
assertArrayEqual(middle([1, 2, 3]),[2]);// => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArrayEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArrayEqual(middle([1,2,3]),[2]);