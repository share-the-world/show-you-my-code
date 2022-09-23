const data = [
  ["a", "c", 1, 6, 5],
  [6, 7, "d", 9, "3", 11],
  [12, 13, 14, 15, 16, 17],
];

// getter(data, 3) => 1
// getter(data, 8) => 'd'
// getter(data, 13) => 13

// setter(data, 1, 'T')
// =>
// [
//  ['T','c',1,6,5],
//  [6,7,'d',9,'3',11],
//  [12,13,14,15,16,17]
// ]

/**
 * getter
 * @param {Array<Array>} data
 * @param {number} pos
 */
function getter(data, pos) {
  let index = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      index++;
      if (pos === index) {
        return data[i][j];
      }
    }
  }
  return undefined;
}
/**
 * getter
 * @param {Array<Array>} data
 * @param {number} pos
 * @param {any} value
 */
function setter(data, pos, value) {
  let index = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      index++;
      if (pos === index) {
        data[i].splice(j, 0, value);
        return data;
      }
    }
  }
  data[data.length - 1].push(value);
  return data;
}

// test: node javascript/src/interview/10-deliyikong/gettter-setter.js

console.log(getter(data, 3))
console.log(getter(data, 8))
console.log(getter(data, 13))


console.log(setter(data, 1, 'T'))