export const mySqrt = (x: number) => {
  if (x === 0 || x === 1) return x;
  let i = 0, j = x, mid = 0;
  while (i <= j) {
    mid = Math.floor(i + (j-i)/2)
    const result = mid * mid
    if (result === x) {
      return mid;
    } else if (result > x){
      j = mid -1;
    } else {
      i = mid +1;
    }
  }
}