/**
 * 118. 杨辉三角
 * https://leetcode-cn.com/problems/pascals-triangle/
 * @param numRows 
 */
export const generate = (numRows: number): number[][] => {
  if(numRows <= 0) return [];
  const triangle: number[][] = [[1]]
  if(numRows === 1) return triangle;
  let count = 0;
  while (count < numRows) {
    count ++;
    const arr: number[] = [];
    arr.length = count+1;
    triangle.push(arr);
    for(let i = 0; i <= count; i ++) {
      arr[i] = (triangle[count-1][i-1] || 0) + (triangle[count-1][i] || 0)
    }
  }
  console.log('triangle=',triangle)
  return triangle;
}