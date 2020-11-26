var isValid = function(s) {
  var dict = {
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
      console.log(`i=${s.charAt(i)}, j=${s.charAt(j)}`)
      if (dict[s.charAt(i)] !== s.charAt(j)) return false
      i ++;
      j --;
  }
  return true;
};
console.log('输出=',isValid("()"))