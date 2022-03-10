const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}!`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}!`);
  }
};

const countLetters = function(string) {
  let numOfLetters = {};
  for (let letter of string) {
    if (numOfLetters[letter]) {
      numOfLetters[letter] += 1;
    } else {numOfLetters[letter] = 1};
  }
  return numOfLetters;
};
const result1 = countLetters("hello");
console.log(result1);
assertEqual(result1["h"],1)
assertEqual(result1["e"],1)
assertEqual(result1["l"],2)
assertEqual(result1["o"],1)
// initialize empty object
// loop through string + initialize key or add for each iteration

// assertEqual(countLetters("h"));