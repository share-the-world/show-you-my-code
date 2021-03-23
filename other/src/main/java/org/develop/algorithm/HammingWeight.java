package org.develop.algorithm;

public class HammingWeight {
    /**
     * 汉明重量
     * 输入必须是长度为 32 的 二进制串 。
     */
    public int hammingWeight(int n){
        int ret = 0;
        for (int i = 0; i < 32; i++) {
            if ((n & (1 << i)) != 0) {
                ret++;
            }
        }
        return ret;
    }
}
