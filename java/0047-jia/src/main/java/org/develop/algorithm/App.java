package org.develop.algorithm;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App{
    /**
     * {{7,0}, {4,4}, {7,1}, {5,0}, {6,1}, {5,2}}
     */
    public int[][] doIt( int[][] args ){
        Arrays.sort(args, (arg1, arg2) -> arg1[0] == arg2[0] ? arg1[1] - arg2[1] : arg2[0] - arg1[0]);

        List<int[]> list = new LinkedList<>();
        for (int[] i : args) {
            list.add(i[1], i);
        }
        return list.toArray(new int[list.size()][2]);
    }
}
