/**
 * 56. 合并区间
 * 思路：双重循环，出栈，判断是否为交集，合并集合
 * https://leetcode-cn.com/problems/merge-intervals/
 */
export const merge = (intervals: number[][]): number[][] => {
  console.log('————————————————————')
  console.log('输入=',intervals)
  intervals.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const res: number[][] = [];
  while(intervals.length > 0) {
    let intersection = intervals.shift()!;
    let i = 0;
    while (i < intervals.length) {
      //是否存在交集
      if ((intersection[0] >= intervals[i][0] && intersection[0] <= intervals[i][1])
        || (intersection[1] >= intervals[i][0] && intersection[1] <= intervals[i][1])
        || (intersection[0] <= intervals[i][0] && intersection[1] >= intervals[i][1])) {// a∈[c,d] || b∈[c,d] || [c,d]∈[a,b]
        const start = Math.min(intersection[0], intervals[i][0]);
        const end = Math.max(intersection[1], intervals[i][1]);
        intersection = [start, end];
        intervals.splice(i, 1);
      } else {
        i ++;
      }
    }
    res.push(intersection)
  }
  console.log('输出=',res)
  return res;
}

