const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}!`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}!`);
  }
};

const tail = function(array) {
  let value = array.slice(1);
  return value;
}; console.log(tail([20,15,6,4,10,50,50,200,30,50,302]));

const result = tail(["Bailey", "Taylor", "Coding", 700]);
assertEqual(result.length, 3);
assertEqual(result[0], "Taylor");
assertEqual(result[2], 700);
