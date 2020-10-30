
/**
 * 快速排序算法
 * 基本思想：
 * 1.选择一个基准数（数组第一个）
 * 2.把数组划分为左右两部分，左边数<基准数，右边数>基准数
 * 3.不断重复步骤2（递归）
 * @param arr 
 */
export const fastSort = (arr: number[]): number[] => {
  if (!arr || arr.length <= 0 ) return [];
  if (arr.length === 1) return arr;
  const loop = (arr: number[], left:number, right: number) => {
    console.log(`left=${left}, right=${right}`)
    if (left >= right) return;
    let i = left, j = right;
    const base = arr[i];
    while (true) {
      while(i < j) {// 移动j指针，直到小于base为止
        if (arr[j] >= base) {
          j --; // 移动j指针
        }else {// 小于base, 交换，跳出循环
          console.log(`1: i=${i},j=${j}, arr[i]=${arr[i]}, arr[j]=${arr[j]}`)
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          break; 
        }
      }
      while (i < j) {
        if (arr[i] <= base) {
          i ++;
        }else {
          console.log(`2: i=${i},j=${j}, arr[i]=${arr[i]}, arr[j]=${arr[j]}`)
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          break;
        }
      }
      console.log(`3: i=${i},j=${j}`)
      if (i === j) {
        arr[i] = base;
        break; // 跳出while(true)循环
      }
    }
    const mid = i;
    loop(arr,left, mid-1);
    loop(arr, mid+1,right)
  }
  loop(arr, 0, arr.length-1)
  console.log('结果：',arr)
  return [];
}


