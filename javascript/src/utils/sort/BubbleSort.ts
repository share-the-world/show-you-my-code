import {Compare} from './index'


/**
 *  **自定义排序算法**
 * 
 * 冒泡排序,不传sort函数则默认升序
 * - 想要改为降序，sort函数写成 `(a,b) => b - a;`
 * @param arr 
 * @param callback 
 */
export const bubbleSort = (arr: number[], callback?: Compare<number>) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp: number = 0;
      if (callback){
        const result:number = callback(arr[i],arr[j]);
        if (result !== 0) { // a和b不相等
          if (result === arr[i] - arr[j] && arr[i] > arr[j]) { // 升序
            temp = arr[i]; // 较大的缓存
            arr[i] = arr[j];// +较小的向前冒泡
            arr[j] = temp;
          } else if (result !== arr[i] - arr[j] && arr[i] < arr[j]) { // 降序
            temp = arr[j]; 
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      } else { // 没有callback，则默认升序排列
        if (arr[i] > arr[j]) {
          temp = arr[i]; // 较大的缓存
          arr[i] = arr[j];// 较小的向前冒泡
          arr[j] = temp;
        }
      }
      num ++;
    }
  }
  console.log('循环次数:',num)
  return arr;
}

const arr1 = [1,22,6,22,1,54,4,7,88,99,9,6,5,3,2];
console.log(bubbleSort(arr1,(a,b) => b - a));