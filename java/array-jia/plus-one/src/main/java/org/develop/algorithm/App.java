package org.develop.algorithm;

/**
 * Hello world!
 * @auther hsy
 */
public class App {
    /**
     * 输入：digits = [1,2,9]
     * 输出：[1,3,0] = 130
     * 解释：输入数组表示数字 129。
     */
    public int[] plusOne(int[] args){
        for (int i = args.length-1; i >= 0; i--) {
            args[i] ++;
            args[i] %= 10;
            if(0 != args[i]){
                return args;
            }
        }
        args = new int[args.length + 1];
        args[0] = 1;
        return args;
    }
}
