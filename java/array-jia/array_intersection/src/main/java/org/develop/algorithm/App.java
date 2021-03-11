package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * 
 * @author hsy
 */
public class App{
    /**
     * {4,9,5}
     * {9,4,9,8,4}
     */
    public int[] arrayInterSection(int[] args1, int[] args2){
        if(null==args1 || null==args2){
            return new int[]{};
        }
        if(args1.length == 0 || args2.length == 0){
            return new int[]{};
        }
        if(args2.length < args1.length){
            arrayInterSection(args2, args1);
        }
        int[] returnArray = new int[args1.length];
        int i=0,j=0,index=0;
        Arrays.sort(args1);
        Arrays.sort(args2);
        /**
         * {4, 5, 9}
         * {4, 4, 8, 9, 9}
         */
        while(i < args1.length && j<args2.length){
            if(args1[i] < args2[j]){
                i ++;
            }else if(args1[i] > args2[j]){
                j ++;
            }else{
                returnArray[index ++] = args1[i];
                i ++;
                j ++;
            }
        }
        return Arrays.copyOfRange(returnArray, 0, index);
    }
}