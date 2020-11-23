/**
 * 242. 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/
 * @param s 
 * @param t 
 */
export const isAnagram = (s: string, t: string): boolean => {
  console.log('————————————————————————————')
  console.log(`输入:s=${s},t=${t}`)
  if (s.length !== t.length) return false;
  const sArr = s.split('');
  const tArr = t.split('');
  sArr.sort((a, b) => a.localeCompare(b))
  tArr.sort((a, b) => a.localeCompare(b))
  for (let i = 0; i < sArr.length; i ++) {
    if (sArr[i] !== tArr[i]) {
      return false
    }
  }
  return true;
}

(() => {
  console.log('输出=',isAnagram('anagram','nagaram'))
  console.log('输出=',isAnagram('rat','cat'))
  console.log('输出=',isAnagram('','nagaram'))
})()