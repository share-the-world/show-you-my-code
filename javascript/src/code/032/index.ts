
export const islandPerimeter = (grid: number[][]): number => {
  let count = 0;// 正方形个数
  let repeat = 0; // 重叠的边数
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {// 正方形个数
        count ++;
      } 
      if (j<grid[i].length-1 && grid[i][j] === 1 && grid[i][j+1] === 1) {// 横向重叠的数量
        repeat ++;
      }
      if (i<grid.length-1 && grid[i][j] === 1 && grid[i+1][j]) { //纵向
        repeat ++;
      }
    }
  }
  const res = (count * 4) - (repeat * 2)
  console.log(`count * 4=${count * 4}, repeat * 2=${repeat * 2}, res = ${res}`)
  return res;
}