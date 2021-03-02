const { JsxEmit } = require("typescript");

/**
 * 解法1：暴力破解
 * 矩阵-304. 二维区域和检索 - 矩阵不可变
 * https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for(let i = row1; i <= row2; i ++) {
        for(let j = col1; j <= col2; j ++) {
            sum += this.matrix[i][j]
        }
    }
    console.log(`params=${Array.from(arguments)}, sum=${sum}`)
    return sum
};

const matrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ])

matrix.sumRegion(2, 1, 4, 3)
matrix.sumRegion(1, 1, 2, 2)
matrix.sumRegion(1, 2, 2, 4)

