package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     * > 输入：["h","e","l","l","o"]
     * > 输出：["o","l","l","e","h"]
     * 原地算法
     */
    public void reverseString(char[] args){
        if(null==args || args.length == 0 || args.length ==1){
            return ;
        }
        int n = args.length;
        for (int i=0; i<n/2; i++) {
            char temp = args[i];
            args[i] = args[n-1-i];
            args[n-1-i] = temp;
        }
        System.out.println(Arrays.toString(args));
    }
}
