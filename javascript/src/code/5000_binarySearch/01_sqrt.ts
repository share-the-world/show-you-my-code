/**
 * x 的平方根
 * https://leetcode-cn.com/leetbook/read/binary-search/xe9cog/
 * @param x 
 */
export const mySqrt = (x: number): number => {
  if (x < 0) return -1;
  if (x === 0 || x === 1) return x;
  let i = 0, j = x, mid = 0;
  while (i <= j) {
    mid = i + ((j-i) >> 1);// 
    // console.log('mid=',mid)
    const result = mid * mid
    if (result > x) {
      j = mid;
    } else if (result === x) {
      return mid
    } else if ((mid+1) * (mid+1) > x){// 如果 mid^2 < x < (mid+1)^2
      return mid
    } else {
      i = mid
    }
  }
  return i;
}