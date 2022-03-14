const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');

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

module.exports = letterPositions;
