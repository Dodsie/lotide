const assertEqual = require('./assertEqual');

const findKeyByValue = function(object,string) {
  const keys = Object.keys(object);
  const movies = Object.values(object);
  let solution = undefined;
  for (let m = 0; m < movies.length; m++) {
    if (movies[m] === string) {
      solution = keys[m];
    }
  } return solution;
};

module.exports = findKeyByValue;