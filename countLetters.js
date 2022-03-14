const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  let numOfLetters = {};
  for (let letter of string) {
    if (numOfLetters[letter]) {
      numOfLetters[letter] += 1;
    } else {
      numOfLetters[letter] = 1;
    }
  }
  return numOfLetters;
};


module.exports = countLetters;
