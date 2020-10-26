import {lengthOfLIS} from '../../src/code/3000_dynamic/01_longest_upper'


const case1 = [10,9,2,5,3,7,101,18];
const case2 = [0];
const case3 = [1,2];
const case4 = [-2,-1];
const case5 = [3,1,2];
const case6 = [2,2];
const case7 = [2,5,3,4];
// 执行测试
(() => {
  const max = lengthOfLIS(case7);
  console.log('结果：',max)
})()