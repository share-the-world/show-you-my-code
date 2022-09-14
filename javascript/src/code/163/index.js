/**
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/
 * @param {String} s
 */
var isValid = function (s) {
  console.log("input:", s);
  if (!s || s.length % 2 !== 0) return false;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const last = stack[stack.length - 1];
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (map[last] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  console.log("stack:", stack);
  return stack.length === 0;
};

// node javascript/src/code/163/index.js
console.log(isValid("(){}[]"), "\n");
console.log(isValid("(([[))"), "\n");
console.log(isValid("(([]))"), "\n");
console.log(isValid("(((({{[]}}))))"), "\n");
console.log(isValid(""), "\n");
console.log(isValid("(]"), "\n");
console.log(isValid("({])"), "\n");
