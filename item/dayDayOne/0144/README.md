[原题：数组的度](https://leetcode-cn.com/problems/degree-of-an-array/)

给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

**示例 1：**
```
输入：[1, 2, 2, 3, 1]
输出：2
解释：
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
```
**示例 2：**
```
输入：[1,2,2,3,1,4,2]
输出：6
```
 

**提示：**

- nums.length 在1到 50,000 区间范围内。
- nums[i] 是一个在 0 到 49,999 范围内的整数。

## 解题思路
使用哈希表，`key`是`number`类型,表示`nums[i]`,

`value`是长度为3的数字
- value[0]:该数字出现的次数
- value[1]:该数字首次数显位置
- value[2]:该数字最后出现位置

找出出现次数最多的数字有哪些，并计算首尾位置之差
```js
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
// 测试
findShortestSubArray1([1,2,2,3,1,4,2,1,12,33,55,2])
```