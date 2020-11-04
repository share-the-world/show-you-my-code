/**
 * 未完成
 */
export const merge = () => (intervals: number[][]): number[][] => {
  let canMerge = true;
  while (canMerge) {
    for(let i = 0; i < intervals.length; i ++) {
      for(let j = i +1; j < intervals.length; j ++) {

      }
    }
  }
  return [];
}

const mergeTwo = (a1: number[], a2: number[]): number[] | undefined => {
  const [m ,n] = a1
  const [p ,q] = a2
  if ((n >= p && n <= q) || (m <=q && q <= n)) {
    return [Math.min(m,n,p,q), Math.max(m,n,p,q)]
  } else {
    return undefined
  }
}