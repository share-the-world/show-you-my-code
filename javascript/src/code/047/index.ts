/**
 * 1122. 数组的相对排序
 * https://leetcode-cn.com/problems/relative-sort-array/
 * @param arr1 
 * @param arr2 
 */
export const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
  console.log('arr1=',arr1)
  console.log('arr2=',arr2)
  const res: number [] = [];
  while(arr1.length > 0) {
    const num = arr2.shift();// 出栈
    if (num !== undefined) {
      let index = arr1.indexOf(num);
      while(index >= 0 ) {
        res.push(arr1.splice(index,1)[0]);// 找到后加入结果集
        index = arr1.indexOf(num)
      }
    } else {// arr2空了，剩余的升序排列，结束循环
      arr1.sort((a, b) => a -b);
      break;
    }
  }
  return res.concat(arr1);
}

(() => {
  console.log('输出=',relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
})()