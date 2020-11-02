
/**
 * 最长回文子串
 * 题目地址：https://leetcode-cn.com/leetbook/read/array-and-string/conm7/
 * @param s 
 */
const longestPalindrome = (s: string):string => {
  if(!s) return '';
  if (s.length === 1) return s; 
  let max: number = 0;
  let res: string = '';
  for (let i = 0; i < s.length; i++) {
    for(let j = s.length; j >= i+1; j --){
      const child = s.substring(i,j);
      if (isPalindrome(child)){
        if (child.length >= max) {
          max = child.length;
          res = child;
        }
      }
    }
  }
  return res
}



/**
 * 是否为回文字符串
 */
const isPalindrome = (s:string): boolean => {
  let i = 0, j = s.length - 1;
  while(i <= j) {
    if (s.substring(i,i+1) !== s.substring(j,j+1)){
      return false;
    }
    i ++;
    j --;
  }
  return true;
}

const case200 = 'a1abbaa';

(() => {
  // console.log('回文=',isPalindrome(case200))
  console.log('最长=',longestPalindrome('babad'))
  console.log('最长=',longestPalindrome('aaaa'))
})()