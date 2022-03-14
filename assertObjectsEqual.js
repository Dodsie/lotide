const eqObjects = function(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }
  for (let key in objectOne) {
    if (!(objectOne[key] === Object)) {
      if (objectOne[key] !== objectTwo[key]) return false;
    } else if (objectOne[key] === Array) {
      if (!eqArrays(objectOne[key],objectTwo[key])) return false;
    } else {
      if (!eqObjects(objectOne[key],objectTwo[key])) return false;
    }
  }
  return true;
};
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


const personDuplicate = {name: 'Bailey', lastName: 'Dods'};
const person = {name: 'Bailey', lastName: 'Dods'};
const person2 = {name: 'Tonka', lastName: 'Jahari'};
const person2Duplicate = {name: 'Tonka', lastName: 'Jahari'};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual,expected)) {
    return `❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}!`;
  } else {
    return `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}!`;
  }
};
// console.log(assertObjectsEqual(person,personDuplicate));
// console.log(assertObjectsEqual(person,person2Duplicate));
// console.log(assertObjectsEqual(person2,personDuplicate));


module.exports = assertObjectsEqual;