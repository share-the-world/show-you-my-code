
/**
 * 239. 滑动窗口最大值
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 */
const maxSlidingWindow = (nums: number[], k: number): number[] => {
    let i = 0, res: number[] = [];
    do {
        let j = (i + k) < nums.length ? i + k : nums.length;
        let max = nums[i];
        for(let n = i; n < j; n ++) {
            max = Math.max(max, nums[n])
        }
        res.push(max)
        i ++;
    }while(i <= nums.length - k)
    console.log('结果=', res)
    return res;
}

(() => {
    maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
    maxSlidingWindow([1], 1)
    maxSlidingWindow([1,-1], 1)
    maxSlidingWindow([9,11], 2)
    maxSlidingWindow([4,-2], 2)
})()