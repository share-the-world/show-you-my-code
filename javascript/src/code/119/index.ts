/**
 * 456. 132模式
 * https://leetcode-cn.com/problems/132-pattern/
 * @param nums 
 */

export const find132pattern = (nums: number[]): boolean => {
    console.log('nums=',nums)
    let i = 0,j = 0,k = 0;
    while(i < nums.length) {
        j = i +1;
        while(j < nums.length){
            if (nums[i] < nums[j]) {
                k = j +1;
                while(k < nums.length){
                    if (nums[i] < nums[j] && nums[k] < nums[j] && nums[i] < nums[k]) {
                        return true;
                    } else {
                        k ++;
                    }
                }
                break;
            } else {
                j ++
            }
        }
        i ++;
    }
    return false;
}
// 三次for循环时间复杂度过高，leecode超时
export const find132pattern1 = (nums: number[]): boolean => {
    console.log('nums=',nums)
    for(let i = 0; i < nums.length; i ++){
        for (let j = i +1; j < nums.length; j ++) {
            if (nums[j] > nums[i]) {
                for (let k = j +1; k < nums.length; k ++){
                    if (nums[i] < nums[j] && nums[k] < nums[j] && nums[i] < nums[k]) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}


console.log(find132pattern([1, 2, 3, 4]))
console.log(find132pattern([3, 1, 4, 2]))
console.log(find132pattern([3,5,0,3,4]))
console.log(find132pattern([1,0,1,-4,-3]))
console.log(find132pattern([0, 1, 0, 3, 5, 4]))