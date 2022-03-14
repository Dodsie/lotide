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



const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: ${arrayOne} === ${arrayTwo}!`);
  } else if (arrayOne !== arrayTwo) {
    console.log(`❌❌❌Assertion Failed: ${arrayOne} !== ${arrayTwo}!`);
  }
};


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    const letterPos = results[letter];
    if (letterPos) {
      letterPos.push(i);
      results[letter] = letterPos;
    } else {
      results[letter] = [i];
    }
    
  } return results;
};


// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions('hello'));
