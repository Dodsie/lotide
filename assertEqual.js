const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected + "!");
  } else if (actual !== expected) {
    console.log("❌❌❌Assertion Failed: " + actual + " !== " + expected + "!");
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bailey", "Bailey");
assertEqual("Not-Identical", "Identical");
assertEqual(25, 25);
assertEqual(100,50);
