// 最长上升子序列，此此方案不正确
export const lengthOfLIS = (nums: number[]): number => {
  if (nums.length <= 0 || !nums) return 0;
  if (nums.length === 1) return nums.length;
  let max = 0;
  let surplus = nums.length;//剩余个数
  for (let i = 0; i < nums.length; i++) {
    if (surplus <= max) { // 如果剩余数量比max小，就不用比较了
      break;
    }
    let temp = nums[i];
    let count = 1;
    let statistics:number[] = [temp]
    // 与nums[i]后面所有的数进行比较，统计连续上升数量
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] > temp) {
        temp = nums[j];
        count ++;
        statistics.push(temp)
      }
    }
    console.log(`最大连续子序列=${statistics.toString()}, 数量=${count}`)
    if (count > max) {
      max = count;
    }
    surplus --;
  }

  return max;
}