const eqArrays = require('./eqArrays');

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


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;