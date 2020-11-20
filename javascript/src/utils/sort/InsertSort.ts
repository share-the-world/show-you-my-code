/**
 * 插入排序算法
 * 演示图：https://images.cnblogs.com/cnblogs_com/coding-996/1609484/o_200210053346482235d48a81823b830e50aaf5276c25.gif
 * @param arr 
 */
export const insertDort = (arr: number[]): number[] => {
  if (!arr || arr.length <= 1) return arr;
  // console.log('输入=',arr)
  for(let i = 0; i < arr.length; i ++){
    for(let j = i; j > 0; j --) {
      if (arr[j] - arr[j-1] < 0) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}