// 翻转字符串，只能在原数组上操作

// 方法1：使用临时变量
const reverseString1 = (s: string[]):void => {
  const temp = JSON.parse(JSON.stringify(s));
  s.length = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    s.push(temp[i])
  }
}

// 方法2：数组内交换
const reverseString2 = (s: string[]):void => {
  for (let index = s.length - 1; index >= 0 ; index--) {
    const element = s[index];
    s.unshift()
  }
}