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
// const results1 = takeUntil(data1, x => x < -2);
// console.log(results1);
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);



// callback(value)
// 1,2,5,7,2
// callback =x => x < 0
// callback =1 => 1 < 0 false
// callback =2 => 2 < 0 false