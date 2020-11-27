/**
 * 剑指 Offer 05. 替换空格
 * https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/50ywkd/
 */
export const replaceSpace = (s: string): string => {
  console.log('——————————————————————————————')
  console.log('输入=',s)
  if (!s || s.length <= 0) return s;
  const arr = s.split('');
  for(let i = 0; i < arr.length; i ++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  return arr.join('');
}

(() => {
  console.log('输出=', replaceSpace('s   a'))
  console.log('输出=', replaceSpace('We are happy.'))
  console.log('输出=', replaceSpace('  wer   as dasd '))
})()