
/**
 * 628. 三个数的最大乘积
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
 * @param nums 
 */
export const maximumProduct = (nums: number[]): number => {
    let min1 = 1001, min2= 1001;
    let max1 = -1001,max2 = -1001,max3 = -1001;
    for (let i = 0; i < nums.length; i ++){
        const n = nums[i];
        if (n < min1){
            min2 = min1;
            min1 = n;
        } else if (n < min2){
            min2 = n
        }
        if (n > max1) {
            max3 = max2;
            max2 = max1;
            max1 = n
        } else if (n > max2) {
            max3 = max2
            max2 = n
        }else if (n > max3) {
            max3 = n
        }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

console.log('最大值=',maximumProduct([12,11,8,6,0,-1,-24,-55]))