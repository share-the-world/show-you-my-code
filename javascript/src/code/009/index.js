
var sortColors = function(nums = []) {
  const arr0 = nums.filter(i => i === 0);
  const arr1 = nums.filter(i => i === 1);
  const arr2 = nums.filter(i => i === 2);
  // 清空数组
  nums.length = 0;
  // 合并三个数组，并将结果逐个放入nums
  arr0.concat(arr1).concat(arr2).map(i => nums.push(i))
};

var a1 = [1,2]
var a2 = [3,4]
console.log(a1.concat(a2))

console.log(sortColors([2,0,2,1,1,0]))