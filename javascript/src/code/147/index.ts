/**
 * 54. 螺旋矩阵(方案1)
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 思路：按照螺旋路径遍历
 * 1.指针的方向是`右下左上`不停的循环，方向使用二位数组表示`[[0,1], [1,0], [0,-1], [-1, 0]]`
 * 2.遍历次数等于矩阵元素总个数时停止
 * 3.指针走到边界处或已读位置时调整方向,为了让指针不越界，将指针对4取余`(pointer+1)%4`
 * @param matrix 
 */
const spiralOrder = (matrix: number[][]): number[] => {
    const READED = 1.01;// 已读标记
    const DIRECTIONS: number[][] = [[0,1], [1,0], [0,-1], [-1, 0]];// 方向
    const TOTAL = matrix.length * matrix[0].length;// 矩阵总元素个数
    let pointer = 0;// 控制方向的指针
    let count = 0;// 循环次数
    let i = 0, j = 0;
    const res: number[] = []
    while(count < TOTAL){
        res.push(matrix[i][j]);
        count ++;
        matrix[i][j] = READED;// 已读
        const next = [i + DIRECTIONS[pointer][0], j + DIRECTIONS[pointer][1]];// 按照当前方向尝试走下一步
        // 如果下一步到了边界，或者之前已读过的位置，则调整方向
        if (matrix[next[0]] === undefined || matrix[next[0]][next[1]] === READED || matrix[next[0]][next[1]] === undefined) {
            pointer = (pointer +1) % 4;// 改变方向
        }
        i += DIRECTIONS[pointer][0];
        j += DIRECTIONS[pointer][1];
    }
    return res
}
// 测试：
spiralOrder([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
])