# [旋转图像](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhhkv/)

给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 [原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95) 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

示例 3：

```
输入：matrix = [[1]]
输出：[[1]]
```

示例 4：

```
输入：matrix = [[1,2],[3,4]]
输出：[[3,1],[4,2]]
```

提示：

    matrix.length == n
    matrix[i].length == n
    1 <= n <= 20
    -1000 <= matrix[i][j] <= 1000