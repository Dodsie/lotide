
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dodsie/lotide`

**Require it:**

`const _ = require('@dodsie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* function1(assertEqual) : compare a 'primitive' value type to the expected output by "strict-equality" comparison.
* function2 (head): retrieve the first element provided array, array will not be manipulated.
* function3(tail): retrieve everything but the first element of provided array.
* function3(eqArrays): compare "strict-equality" of two provided arrays.
* function4(assertArrayEqual): will take in two arrays and log and appropriate assertion message to the console.
* function5(without): compare two arrays as arguments and return any values that do not "===" the values in compared arrays.
* function6(middle): given an array this will return an array of only the middle elememts, if array is even it will give the two middle elements.
* function7(countOnly): will be provided an array & object, returning an object containing counts that the input object listed. Can be used with assertEqual to compare actual vs expected outcomes.
* function8(countLetters): will take in a sentence and return the count of each of the letters within in "sentence".
* function9(letterPositions): will return an array of all the indices (zero based positions) in the string where each character is found.
* function10(findKeyByValue): will compare an object with a string and provide the key of where the string can be found within the provided object.
* function11(eqObjects): will take in two objects and return true or false, based on a perfect match.
* function12(assertObjectsEqual): will take in two objects and log and appropriate assertion message to the console.
