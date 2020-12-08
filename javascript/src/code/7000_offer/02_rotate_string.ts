
/**
 * 剑指 Offer 58 - II. 左旋转字符串
 * https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/589fz2/
 * @param s 
 * @param n 
 */
export const reverseLeftWords = (s: string,n: number): string => {
  if (!s || s.length <= 1 || s.length <= n) return s;
  
  return s.slice(n, s.length) + s.slice(0,n)
}