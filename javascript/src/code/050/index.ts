
/**
 * 1030. 距离顺序排列矩阵单元格
 * https://leetcode-cn.com/problems/matrix-cells-in-distance-order/
 * @param R 
 * @param C 
 * @param r0 
 * @param c0 
 */
export const allCellsDistOrder = (R: number, C: number, r0: number, c0: number): number[][] => {
  const matrix: number[][] = [];
  // 生成矩阵
  for(let i = 0; i < R; i ++) {
    for(let j = 0; j < C; j ++) {
      matrix.push([i,j]);
    }
  }
  console.log('矩阵=',matrix)
  matrix.sort((a, b) =>  {
    const distanceA = Math.abs(a[0] - r0) + Math.abs(a[1] - c0);
    const distanceB = Math.abs(b[0] - r0) + Math.abs(b[1] - c0);
    return distanceA - distanceB;
  })
  console.log('排序后=',matrix)
  return matrix;
}


(() => {
  // allCellsDistOrder(1,2,0,0);
  // allCellsDistOrder(2,2,0,1);
  allCellsDistOrder(2,3,1,2);
})()