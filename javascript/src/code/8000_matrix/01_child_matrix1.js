const { JsxEmit } = require("typescript");

/**
 * 解法2：数组前缀和
 * 矩阵-304. 二维区域和检索 - 矩阵不可变
 * https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    var sum = 0;
    this.matrix = matrix;
    this.preSum = [];
    
    for(let i = 0; i < matrix.length; i ++) {
        var row = []
        for(let j = 0; j < matrix[0].length; j ++) {
            sum += matrix[i][j]
            row.push(sum);
        }
        this.preSum.push(row)
    }
    console.log('preSum=',this.preSum)
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var sum = 0;
    for(var i = row1; i <= row2; i ++) {
        sum += (this.preSum[i][col2] - this.preSum[i][col1] + this.matrix[i][col1])
    }
    console.log(`sum=`,sum)
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

