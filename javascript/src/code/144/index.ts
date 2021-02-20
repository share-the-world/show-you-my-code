/**
 * 数组的度（解法1）
 * https://leetcode-cn.com/problems/degree-of-an-array/
 * @param nums 
 */
export const findShortestSubArray = (nums: number[]): number => {
    const map = new Map<number,number>()
    let max = 0
    // map记录每个数字出现的次数，max出现最多的次数
    for(let n of nums){
        console.log(n)
        map.set(n, (map.get(n) || 0) + 1)
        max = Math.max(map.get(n) || 0, max)
    }
    console.log(map)
    console.log('max=',max)
    const maxes: number[] = [];// 度最大的数的集合
    for (let k of map.keys()){
        if (map.get(k) === max) {
            maxes.push(k)
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    // 出现次数最多的数字已找到，对比哪个数字的子数组最小
    for (let k of maxes) {
        let i = 0, j = nums.length-1;
        while(i < j){
            if (nums[i] === k && nums[j] === k) break;
            if (nums[i] !== k) i ++;
            if (nums[j] !== k) j --;
        }
        min = Math.min(min, j - i + 1)
        console.log('min=',min)
    }
    return min
}

// 测试：yarn run ts-node src/code/144/index.ts
findShortestSubArray([1,2,2,3,1,4,2])