/**
 * 
 * @param matrix 
 */
const updateMatrix = (matrix: number[][]): number[][] => {
    const res: number[][] = []
    for(let i = 0; i < matrix.length; i ++){
        const row: number[] = [];// v,i,j
        row.length = 3
        for(let j = 0; j < matrix[0].length; j ++){
            row.push(matrix[i][j], i, j);
        }
        res.push(row)
    }
    for(let i = 0; i < res.length; i ++){
        let len = 1;
        while(i + len < res.length || i - len >= 0){
        }
    }
    return []
}