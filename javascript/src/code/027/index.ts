
// 数组中的最长山脉
export const longestMountain = (A: number[]):number => {
  const res: number[] = [];
  for (let i = 1; i < A.length-1; i++) {
    let v = A[i];
    let left = 0;
    for (let m = i-1; m >= 0; m--) {
      if (A[m] >= v) {
        break;
      } else {
        left ++;
        v = A[m];
        console.log(`[${i}]=${A[i]}, [${m}]=${A[m]}`)
      }
    }
    v = A[i];
    let right = 0;
    for (let n = i+1; n < A.length; n++) {
      if (A[n] >= v) {
        break;
      } else {
        right ++;
        v = A[n];
        console.log(`[${i}]=${A[i]}, [${n}]=${A[n]}`)
      }
    }
    if (left > 0 && right > 0) {
      res.push(left + right + 1);
    }
  }
  // 找出最大值
  let max:number = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] > max) {
      max = res[i];
    }
  }
  console.log('res:',res)
  console.log('结果：',max)
  return max;
}