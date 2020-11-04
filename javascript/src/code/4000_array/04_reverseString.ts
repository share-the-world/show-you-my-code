/**
 * 反转字符串中的单词 III
 * https://leetcode-cn.com/leetbook/read/array-and-string/c8su7/
 * @param s 
 */
export const reverseWords =(s: string): string => {
  if (!s) return '';
  const arr: string[] = s.split(' ');
  for (let i = 0; i < arr.length; i ++) {
    let l = 0, r = arr[i].length-1;
    const strs = arr[i].split('');
    while(l <=r){
      const temp = strs[l];
      strs[l] = strs[r];
      strs[r] = temp;
      l ++;
      r --;
    }
    arr[i] = strs.join('');
  }
  console.log('s=',s)
  return arr.join(' ');
}