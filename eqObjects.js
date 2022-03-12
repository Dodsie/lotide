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

  
// END OF FUNCTION


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const yz = { a: "1", b: "2", d: "5", c: "8"};
const yx = { b: "2", a: "1", d: "5", c: "8" };
console.log(eqObjects(yz, yx)); // => true

const zy = { a: "1", b: "3", d: "5", c: "9"};
const xy = { b: "2", a: "7", d: "5", c: "8" };
console.log(eqObjects(zy, xy)); // => false


// let output = "";
//   const keys1  = Object.keys(object).sort();
//   // console.log('keys1',keys1);
//   const keys2 = Object.keys(objectTwo).sort();
//   console.log('keys2',keys2);
//   console.log('keys1Lngth', keys1.length);
//   console.log('keys2Lngth', keys2.length);
//   console.log('keys1',keys1);
//   // console.log(keys2);
//   if (keys1.length !== keys2.length || keys1.sort() !== keys2.sort()) {
//     output = false;
//   } else if (keys1 === keys2) {
//     output = true;
//   }