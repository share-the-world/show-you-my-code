[399. 除法求值-并查集](https://leetcode-cn.com/problems/evaluate-division/)

给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。

另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。

返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。

 

**注意：**
输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

 

**示例 1：**
```
输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
解释：
条件：a / b = 2.0, b / c = 3.0
问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
```
**示例 2：**
```
输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
输出：[3.75000,0.40000,5.00000,0.20000]
```
**示例 3：**
```
输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
输出：[0.50000,2.00000,-1.00000,-1.00000]
```

**提示：**

- `1 <= equations.length <= 20`
- `equations[i].length == 2`
- `1 <= Ai.length, Bi.length <= 5`
- `values.length == equations.length`
- `0.0 < values[i] <= 20.0`
- `1 <= queries.length <= 20`
- `queries[i].length == 2`
- `1 <= Cj.length, Dj.length <= 5`
- `Ai, Bi, Cj, Dj` 由小写英文字母与数字组成

**练习**

- [「力扣」第 547 题：省份数量（中等）](https://leetcode-cn.com/problems/number-of-provinces)；
- [「力扣」第 684 题：冗余连接（中等）](https://leetcode-cn.com/problems/redundant-connection)；
- [「力扣」第 1319 题：连通网络的操作次数（中等）](https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected)；
- [「力扣」第 1631 题：最小体力消耗路径（中等）](https://leetcode-cn.com/problems/path-with-minimum-effort)；
- [「力扣」第 959 题：由斜杠划分区域（中等）](https://leetcode-cn.com/problems/regions-cut-by-slashes)；
- [「力扣」第 1202 题：交换字符串中的元素（中等）](https://leetcode-cn.com/problems/smallest-string-with-swaps)；
- [「力扣」第 947 题：移除最多的同行或同列石头（中等）](https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column)；
- [「力扣」第 721 题：账户合并（中等）](https://leetcode-cn.com/problems/accounts-merge)；
- [「力扣」第 803 题：打砖块（困难）](https://leetcode-cn.com/problems/bricks-falling-when-hit)；
- [「力扣」第 1579 题：保证图可完全遍历（困难）](https://leetcode-cn.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable);
- [「力扣」第 778 题：水位上升的泳池中游泳（困难）](https://leetcode-cn.com/problems/swim-in-rising-water)。
