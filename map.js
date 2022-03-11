const words = ["ground", "control", "to", "major", "tom"];


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
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word.length);

const results2 = map(words, word => word[0]);

const results3 = map(words, word => word[1]);



assertArrayEqual(map(words,word => word.length),[ 6, 7, 2, 5, 3 ]);
assertArrayEqual(map(words,word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(map(words,word => word[1]),[ 'r', 'o', 'o', 'a', 'o' ]);
