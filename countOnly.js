const assertEqual = require('./assertEqual');


const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      let count = 0;
      for (const item of allItems) {
        if (item === key) {
          count += 1;
        }
      }
      if (count > 0) {
        result[key] = count;
      }
    }
  }
  return result;
};


module.exports = countOnly;