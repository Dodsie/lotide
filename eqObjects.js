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

module.exports = eqObjects;