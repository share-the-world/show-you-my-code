const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];

arr1.pop();
arr1.splice(1, 0, 7);
// console.log(arr1);

var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;

  while (i < m + n && j < n) {
    if (nums2[j] <= nums1[i]) {
      nums1.pop();
      nums1.splice(i, 0, nums2[j]);

      j++;
    } else if (nums1[i] === 0 && i >= m) {
      nums1.splice(i, 1, nums2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  return nums1;
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([7, 10, 11, 0, 0, 0], 3, [1, 5, 8], 3))
// console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
console.log(merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5));

// node javascript/src/interview/test.js
