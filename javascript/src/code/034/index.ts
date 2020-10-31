/**
 * 暴力解法,两次双重遍历
 * @param matrix 
 */
const rotate = (matrix: number[][]): void => {
  const res: number[][] = [];
  for(let i = 0; i < matrix.length; i ++){
    const row:number[] = []
    for(let j = matrix.length-1; j >=0; j --){
      row.push(matrix[j][i]);
    }
    res.push(row)
  }
  for(let i = 0; i < matrix.length; i ++){
    for(let j = matrix.length-1; j >=0; j --){
      matrix[i][j] = res[i][j]
    }
  }
}
const case33 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

(() => {
  rotate(case33)
})()