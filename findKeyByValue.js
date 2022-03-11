const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}!`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}!`);
  }
};


const bestTvShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object,string) {
  const keys = Object.keys(object);
  const movies = Object.values(object);
  let solution = 0;
  for (let m = 0; m < movies.length; m++) {
    if (movies[m] === string) {
      solution = keys[m];
    }
  } return solution;
};


//findKeyByValue(bestTvShowsByGenre,"Brooklyn Nine-Nine");
assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"),"drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), 0);
assertEqual(findKeyByValue(bestTvShowsByGenre, "Brooklyn Nine-Nine"), "comedy");