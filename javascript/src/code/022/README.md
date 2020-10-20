# 解题思路

这个题可以想象成：第`n-i+1`个节点(L[n-i+1])插入到第`i`个节点(L[i])前面。

**注意：**不能产生环

第一个节点不参与重排，从第一个节点开始计算，总节点数为`length-1`,从`i=1`开始循环
```JavaScript
两个节点分别为
node1 = L[i]
node2 = L[n-i+1]
```

只要i小于n-i+1就一直循环，
```JavaScript
//找到头节点
pre1 = L[i-1]
pre1.next = node2

//node2插入到node1前面
node2.next = node1
```

每次循环，都要将node2前面的那个节点的`next`置空
```Java
pre2 = L[n-i]
pre2.next
```