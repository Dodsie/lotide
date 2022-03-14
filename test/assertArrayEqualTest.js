const assertArrayEqual = require('../assertArrayEqual');

assertArrayEqual([2,2,2],[2,2,2]);
assertArrayEqual([5,2,5],[2,5,2]);
assertArrayEqual([1,2,3],[1,2,3]);
assertArrayEqual([2,5,2],[2,4,2]);
assertArrayEqual([3,4,5,7],[3,4,5,7]);