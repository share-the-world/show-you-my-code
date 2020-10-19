// 比较含退格的字符串
const backspaceCompare = (S: string, T: string): boolean => {
  const str1 = getText(S)
  const str2= getText(T)
  console.log('str1:',str1.toString());
  console.log('str2:',str2.toString());
  return str1 === str2;
}

const getText = (str: string):string[] => {
  const stack: string[] = [];// 栈
  if(!str) return [];
  const splits = str.split('');
  for (let i = 0; i < splits.length; i++) {
      const isBack = splits[i] === '#';
      if (isBack) { // 回退
        i >= 1 && stack.shift();// 头部移除
      } else {
        stack.unshift(splits[i]);// 头部添加
      }
  }
  return stack.reverse();// 还原顺序
}

// 执行测试：
(() => {
  const s1 = "##asiuu8##s#f##";
  const t1 = "ert####asiiu#ss#c###";
  backspaceCompare(s1,t1)
})()