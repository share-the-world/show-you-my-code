/**
 * 54. 螺旋矩阵(方案2)
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 思路
 * 1.像剥洋葱似的一层层扒皮
 * 2.通过对角线的两个点确定每层皮四个点
 * @param matrix 
 */
const spiralOrder1 = (matrix: number[][]): number[] => {
    const res: number[] = [];
    let top = 0, left = 0, bottom = matrix.length-1, right = matrix[0].length-1;// 根据对角线就可以确定矩阵的四个边
    while(top < bottom && left < right){
        // 左 -> 右（上边）
        for (let l = left; l < right;l++) {
            res.push(matrix[top][l])
        }
        // 上 -> 下（右边）
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right])
        }
        // 右 -> 左（下边）
        for (let i = right;i > left;i--) {
            res.push(matrix[bottom][i])
        }
        // 下 -> 上（左边）
        for (let i = bottom; i > top; i--) {
            res.push(matrix[i][left])
        }
        top ++;
        left ++;
        bottom --;
        right --
    }
    console.log(res)
    return res;
}

// 测试：
spiralOrder1([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
])
spiralOrder1([
    [1,2,],
    [6,7,],
    [11,12,],
    [16,17,],
])