const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Bailey", "Taylor", "Coding", 700]);
assertEqual(result.length, 3);
assertEqual(result[0], "Taylor");
assertEqual(result[2], 700);
assertEqual(result.length, 4);
assertEqual(result[1], "Taylor");
assertEqual(result[3], 700);