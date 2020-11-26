/**
 * 20. 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param s 
 */
export const isValid = (s: string): boolean => {
  var dict: any = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
  }
  if(!s || s.length < 2 || s.length % 2 !== 0) return false
  let i = 0, j = s.length - 1;
  while(i <= j) {
      if (dict[s.charAt(i)] !== s.charAt(j)) return false
      i ++;
      j --;
  }
  return true;
}