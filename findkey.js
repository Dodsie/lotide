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

