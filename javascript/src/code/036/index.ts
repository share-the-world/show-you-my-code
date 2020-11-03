/**
 * 有效的山脉数组
 * 此思路复杂度为N^2,java实现的复杂度为n
 * https://leetcode-cn.com/problems/valid-mountain-array/
 * @param A 
 */
export const validMountainArray = (A: number[]): boolean => {
  for(let i = 0; i < A.length; i ++) {
    let top = true;
    for (let l = 0; l < i; l ++) {
      if (A[l] >= A[l+1]) {// 如果相邻两个，左>=右，说明[l]不是峰顶
        top = false;
        break;
      }
    }
    if (!top) continue;// 左侧无顶峰，直接进入下次循环
    for (let r = A.length-1; r > i; r --) {// 如果相邻两个，右>=左，说明[r]不是峰顶
      if (A[r] >= A[r-1]) {
        top = false;
        break;
      }
    }
    if (top && i !== 0 && i !== A.length-1) return true;
  }
  return false;
}