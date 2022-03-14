const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArrayEqual = require('./assertArrayEqual');
const assertObectsEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByvalue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  assertObectsEqual: assertObectsEqual,
  assertArrayEqual: assertArrayEqual,
  countLetter: countLetter,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};