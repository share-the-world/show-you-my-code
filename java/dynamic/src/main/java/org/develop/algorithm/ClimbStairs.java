package org.develop.algorithm;
/**
 * @author hsy
 */
public class ClimbStairs {
    /**
     * 爬楼梯
     * f(n) = a
     * f(0) = 0;  f(1) = 1; f(2) = 2
     * @param n 楼梯阶数
     * @return 爬上楼梯的方式数量
     */
    public int climbStairs(int n){
        // 初始化数据
        int i=0, j=0, k=1;
        for (int k2 = 0; k2 < n; k2++) {
            i = j;
            j = k;
            k = i + j;
        }
        return k;
    }
}
