
/**
 * 1356. 根据数字二进制下 1 的数目排序
 * https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 * @param arr 
 */
export const sortByBits = (arr: number[]): number[] => {
  console.log('输入=',arr)
  const statistic: {count:number,num:number}[] = [];
  for(let i = 0; i < arr.length; i ++){
    let count = 0;// 二进制1的数量
    let num = arr[i];
    while(num > 0) {
      if (num % 2 === 1) {// 余数为1
        count ++;
      }
      num = Math.floor(num/2);
    }
    statistic.push({num:arr[i],count})
  }
  // console.log('statistic=',statistic)
  statistic.sort((a,b) => {
    if (a.count === b.count) {
      return a.num - b.num
    }else {
      return a.count - b.count
    }
  })
  const res = statistic.map(v => v.num)
  console.log('结果=',res)
  console.log('————————————————————————————————')
  return res;
}

const quickSort = (nums: number[]) => {
  if (nums.length <= 1 ) return nums;

}