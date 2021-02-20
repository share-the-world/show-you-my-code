
/**
 * 数组的度（解法2）
 * https://leetcode-cn.com/problems/degree-of-an-array/
 * @param nums 
 */
export const findShortestSubArray1 = (nums: number[]): number => {
    // key是出现的数字，value[0]该数字出现次数，value[1]首次出现位置，value[2]最后一次出现位置
    const map = new Map<number,number[]>();
    let max = 0;// 最多的次数
    for (let i = 0; i < nums.length; i ++){
        const n = nums[i]
        if (map.has(n)){
            const value = map.get(n)!;
            map.set(n,[value[0]+1, value[1],i])
        } else {// 首次出现
            map.set(n,[1,i,0])
        }
        max = Math.max(max, map.get(n)![0])
    }
    console.log(map)
    console.log('max=',max)
    let min = Number.MAX_SAFE_INTEGER;
    // 寻找数组n第一次出现和最后一次出现的位置之差
    for (let k of map.keys()){
        const value = map.get(k)!;
        if (value[0] === max) {
            min = Math.min(min, value[2] - value[1] + 1)
            console.log('min=',min)
        }
    }
    return min;
}
// 测试：yarn run ts-node src/code/144/index1.ts
findShortestSubArray1([1,2,2,3,1,4,2,1,12,33,55,2])