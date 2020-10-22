# 解题思路

使用一个不断递增的指针`pointer`,根据指针位置将字符串拆成两部分

左侧一部分用`left`表示，截取的区间为`[0,pointer+1]`

右侧一部分用`right`表示，截取的区间为`(pointer+1,length-1]`

- 注意上面开闭区间

判断左侧的字符串是否在右侧出现，如果不出现就结束循环，并记录pointer位置

**举例：**`S="ababcbacadefegdehijhklij"`

第一轮循环，pointer从0开始
```
a,babcbacadefegdehijhklij
ab,abcbacadefegdehijhklij
aba,bcbacadefegdehijhklij
abab,cbacadefegdehijhklij
ababc,bacadefegdehijhklij
ababcb,acadefegdehijhklij
ababcba,cadefegdehijhklij
ababcbac,adefegdehijhklij
ababcbaca,defegdehijhklij
ababcbaca,defegdehijhklij
```
统计次数，`count=9`

第二轮循环，pointer从9开始
```
d,efegdehijhklij
de,fegdehijhklij
def,egdehijhklij
defe,gdehijhklij
defeg,dehijhklij
defegd,ehijhklij
defegde,hijhklij
```
统计次数，`count=7`

第三轮循环，pointer从16开始
```
h,ijhklij
hi,jhklij
hij,hklij
hijh,klij
hijhk,lij
hijhkl,ij
hijhkli,j
hijhklij
```
统计次数，`count=8`
此时pointer=24

记录每次`pointer`值，res=[0,9,16,24]


两两相减求差，输出结果[9,7,8]