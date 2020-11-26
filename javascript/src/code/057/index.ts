
/**
 * 1370. 上升下降字符串
 * https://leetcode-cn.com/problems/increasing-decreasing-string/
 * @param s 
 */
export const sortString = (s: string): string => {
  if (s.length < 2) return s;
  const arr: string[] = s.split('');
  arr.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));// 排序
  let i = arr.length - 1, move = -1;

  let min = arr[0], max = arr[i];
  const res: string[] = [];
  while(arr.length > 0) {
    
  }
  return ''
}