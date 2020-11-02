package org.develop.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {
    /**
     * 1. 将首个元素排序
     * 2. 找出前一个数组的第二个元素（right）跟后一个数组的第一个元素（left）
     */
    public int[][] doIt( int[][] args ){
        List<int[]> res = new ArrayList<>();
        if (args == null || args.length == 0) {return res.toArray(new int[0][]);}
        Arrays.sort(args, (a, b) -> a[0] - b[0]);
        int i = 0;
        while (i < args.length) {
            int left = args[i][0];
            int right = args[i][1];
            while (i < args.length - 1 && args[i + 1][0] <= right) {
                i++;
                right = Math.max(right, args[i][1]);
            }
            res.add(new int[]{left, right});
            i++;
        }
        return res.toArray(new int[0][]);
    }
}
