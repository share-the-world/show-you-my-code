
export const merge1 =(intervals: number[][]): number[][] => {
  const loop = (arr: number[][]): void => {
    let target = undefined;
    let index1 = -1,index2 = -1;
    for (let i = 0; i < arr.length; i ++) {
      for (let j = i+1; j < arr.length; j ++) {
        const result = getInterSection(arr[i], arr[j]);// 并集
        if (result) {
          index1 = i;
          index2 = j;
          target = result;
          console.log(`a1=${arr[i]}, a2=${arr[j]}, 并集=${target}`)
          break;
        }
      }
    }
    if (target) {
      arr.splice(index1, 1);
      arr.splice(index2-1, 1)
      arr.push(target)
      console.log('arr',arr)
      loop(arr)
    }else {
      return;
    }
  }
  loop(intervals)
  console.log('结果:',intervals)
  return intervals
}
/**
 * 求两个集合的并集
 */
const getInterSection = (a1:number[], a2: number[]): number[] | undefined => {
  if (!a1 || !a2) return undefined;
  const [m,n] = a1;
  const [p,q] = a2;
  if (p <= n && n <= q) {// [m,n] U [p,q] = [m,q]
    return [m,q]
  } else if (p <= m && n <= q) {// [m,n] U [p,q] = [p.q]
    return [p,q]
  } else if (m <= p && q <= n) { // [p,q] U [m,n] = [m.n]
    return [m,n]
  }else if (m <= q && q <= n) { // [p,q] U [m,n] = [p,n]
    return [p,n]
  } else {
    return undefined;
  }
}

const arr =  [[1,3],[2,6],[2,8],[8,10],[15,18]];

const set = new Set()