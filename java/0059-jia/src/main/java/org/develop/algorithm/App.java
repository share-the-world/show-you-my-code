package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {
    public int doIt(int[] args){
        if(null==args){
            return 0;
        }
        if(args.length < 2){
            return 0;
        }
        int max = Integer.MIN_VALUE;
        Arrays.sort(args);
        for (int i = 0; i < args.length-1; i++) {
            //int temp = Math.abs(args[i+1] - args[i]);
            int temp = args[i+1] - args[i];
            if(temp > max){
                max = temp;
            }
        }
        return max;
    }
}
