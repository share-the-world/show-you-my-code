/**
 * 滑动窗口的最大值
 * https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/58o46i/
 * @param nums 
 * @param k 
 */
export const maxSlidingWindow = (nums: number[], k: number): number[] => {
  console.log('输入=',nums)
  let length = nums.length - k;
  let res: number[] = [];
  for(let i= 0; i <= length; i ++) {
    let max: number = Number.MIN_SAFE_INTEGER;
    for (let j = i; j < i + k; j ++) {
      max = Math.max(nums[j], max);
    }
    res.push(max);
  }
  return res;
}

// 执行测试：
(() => {
  console.log('输出=', maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
})()