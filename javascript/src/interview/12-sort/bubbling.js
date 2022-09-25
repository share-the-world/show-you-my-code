/**
 * 冒泡排序
 * @param {Array<number>} arr
 */
function bubbling(arr) {
  console.log("input:", arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
// node javascript/src/interview/12-sort/bubbling.js
console.log(bubbling([6, 1, 4, 7, 9, 11, 3, 5]));
