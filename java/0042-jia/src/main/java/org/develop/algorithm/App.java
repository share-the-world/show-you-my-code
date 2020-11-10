package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {

    public int[][] doIt(int[][] points, int k){
        int[][] returnArray = new int[k][2]; 
        Arrays.sort(points, (int[] o1,int[] o2) -> 
                (o1[0] * o1[0]+ o1[1] * o1[1] - o2[0] * o2[0] - o2[1] * o2[1]));
        System.arraycopy(points, 0, returnArray, 0, k);
        return returnArray;
    }
}
