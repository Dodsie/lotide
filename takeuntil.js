const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array,callback) {
  let newArr = [];
  for (let value of array) {
    if (!callback(value)) {
      newArr.push(value);
    } else {
      return newArr;
    }
  } return newArr;
};
module.exports = takeUntil;
