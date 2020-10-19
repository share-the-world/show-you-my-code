// 比较含退格的字符串
const backspaceCompare = (S: string, T: string): boolean => {
  const arr1 = excTwinPointer(S)
  const arr2= excTwinPointer(T)
  console.log('str1:',arr1.toString());
  console.log('str2:',arr2.toString());
  return arr1.toString() === arr2.toString();
}

// 构建一个栈，遇到'#'就出栈，遇到普通字符就压栈
const excStack = (str: string):string[] => {
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

// 将字符串倒序遍历，遇到‘#’就skip+1，遇到普通字符就skip-1，并且把skip=0的字符压栈的新数组
// [解法说明](https://leetcode-cn.com/problems/backspace-string-compare/solution/bi-jiao-han-tui-ge-de-zi-fu-chuan-by-leetcode-solu/)
const excTwinPointer = (str: string): string[] => {
  if(!str) return [];
  const res:string[] = [];
  let skip = 0;//统计`#`数量
  const splits = str.split('');
  for (let i = splits.length - 1; i >= 0; i--) {
    const isBack = splits[i] === '#';
    if (isBack) { // 回退
      skip ++;
    } else {
      if (skip === 0) {
        console.log(str, splits[i])
        res.unshift(splits[i]);// 头部添加
      }
      skip > 0 && skip --;
    }
  }
  return res;
}

// 执行测试：
(() => {
  const s1 = "##asiuu8##s#f##";
  const t1 = "ert####asiiu#ss#c###"
  backspaceCompare(s1,t1)
})();