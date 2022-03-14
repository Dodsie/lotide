const assertEqual = require('./assertEqual');

const findKey = function(list,callback) {
  for (let key in list) {
    let stars = list[key];
    if (callback(stars.stars)) {
      console.log('equal to two',key);
      return key;
    }
  }
};

module.exports = findKey;



// findKeyByValue({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 }, // should grab
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x === 2);

// assertEqual(findKeyByValue({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 }, // should grab
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x === 2),'noma');