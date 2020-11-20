
/**
 * 7. 整数反转
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param {*} x 
 */
var reverse = function(x) {
  if (x > 2 ** 31 - 1 || x < 1 - 2**31) return 0;
  let num = Math.abs(x);
  let res = '0';
  while(num > 0) {
      res += (num % 10);
      num = Math.floor(num / 10)
  }
  const result =  x >=0 ? parseInt(res) : 0 - parseInt(res);
  return x > 2 ** 31 - 1 || x < 0 - 2**31 ? 0 : result
};

console.log(reverse(2324))