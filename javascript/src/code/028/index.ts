
// 有多少小于当前数字的数字
export const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[j] < nums[i]) count ++;
    }
    res.push(count)
  }
  console.log('res:',res)
  return res;
}
