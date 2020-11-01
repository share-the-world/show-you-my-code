/**
 * 题目地址：https://leetcode-cn.com/leetbook/read/array-and-string/ceda1/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs) return '';
  if (strs.length <= 1) return strs[0]
  let res = ''
  for(let i = 0; i < strs[0].length; i ++) {
      const s = strs[0].substring(i,i+1)
      console.log('s:',s)
      // console.log('i:',i)
      if (isMatchAll(s, i,strs)) {
          res += s;
      }else{
        return res;
      }
  }
  console.log('res:',res)
  return res;
};

var isMatchAll = (str,i,arr) => {
  for (let j = 0; j < arr.length; j ++) {
      if (str !== arr[j].substring(i,i+1)){
          return false
      }
  }
  return true
}

const case1 = ["flower","flow","flight"];
const case2 = ["dog","racecar","car"];
const case3 = ["flower","flower","flower","flower"];
(()=> {
  // longestCommonPrefix(case1)
  // longestCommonPrefix(case2)
  longestCommonPrefix(case3)
})()