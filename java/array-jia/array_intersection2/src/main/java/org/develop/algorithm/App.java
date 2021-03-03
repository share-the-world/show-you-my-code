package org.develop.algorithm;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    public int[] arrayInterSection4(int[] args1, int[] args2){
        if(null==args1 || null==args2){
            return new int[]{};
        }
        if(args1.length > args2.length){
            return arrayInterSection4(args2, args1);
        }
        int i=0, j=0;
        Set<Integer> retain = new HashSet<>(2 * args1.length);
        args1 = bubble(args1);
        args2 = bubble(args2);
        while(i<args1.length && j<args2.length){
            if(args1[i] < args2[j]){
                i ++;
            }else if(args2[j] < args1[i]){
                j ++;
            }else{
                retain.add(args1[i]);
                i ++;
                j ++;
            }
        }
        int index = 0;
        int[] returnArray = new int[retain.size()];

        for (int item : retain) {
            returnArray[index++] = (int) item;
        }
        return returnArray;
    }
    /**
     * > 输入：nums1 = [1,2,2,1], nums2 = [2,2]
     * > 输出：[2]
     * 1, 2, 3
     * 1, 1
     */
    public Integer[] arrayInterSection3(int[] args1, int[] args2){
        if(null==args1 || null==args2){
            return new Integer[]{};
        }
        if(args1.length > args2.length){
            return arrayInterSection3(args2, args1);
        }
        int i=0, j=0;
        Set<Integer> retain = new HashSet<>(2 * args1.length);
        args1 = bubble(args1);
        args2 = bubble(args2);
        while(i<args1.length && j<args2.length){
            if(args1[i] < args2[j]){
                i ++;
            }else if(args2[j] < args1[i]){
                j ++;
            }else{
                retain.add(args1[i]);
                i ++;
                j ++;
            }
        }
        return retain.toArray(new Integer[retain.size()]);
    }
    /**
     * 插入排序，因为插入排序性能相对较高
     * 
     * 1, 4, 2, 1
     * @param args
     */
    private int[] bubble(int[] args) {
        // 第一个元素是已经排好序的
        int i, j;
        for (i = 1; i < args.length; i++) {
            int temp = args[i];
            for (j = i; j>0 && temp < args[j-1]; j--) {
                args[j] = args[j-1];
            }
            // 由于for循环时，j--了，此处的j = j-1;
            args[j] = temp;
        }
        return args;
    }

    public int[] arrayInterSection1(int[] args1, int[] args2) {
        Set<Integer> array1 = new HashSet<>(args1.length);
        Set<Integer> array2 = new HashSet<>(args2.length);
        for (int i = 0; i < args1.length; i++) {
            array1.add(args1[i]) ;
        }
        for (int i = 0; i < args2.length; i++) {
            array2.add(args2[i]) ;
        }
        array1.retainAll(array2);
        int index = 0;
        int[] returnArray = new int[array1.size()];

        for (int i : array1) {
            returnArray[index++] = i;
        }
        return returnArray;
    }


    public int[] arrayInterSection2(int[] args1, int[] args2){
        if(null==args1 || null==args2){
            return new int[]{};
        }
        if(args1.length == 0 || args2.length == 0){
            return new int[]{};
        }
        if(args1.length <= args2.length){
            return generateInterSection(args1, args2);
        }
        if(args1.length > args2.length){
            return generateInterSection(args2, args1);
        }
        return null;
    }

    private int[] generateInterSection(int[] args1, int[] args2) {
        int[] returnArray = new int[args1.length];
        Map<Integer, Integer> data = new HashMap<Integer, Integer>(2 * args2.length);
        for (int item : args2) {
            data.put(item, item); 
        }
        int index = 0;
        for (int i = 0; i < args1.length; i++) {
            if(null != data.get(args1[i])){
                returnArray[index++] = args1[i];
            }
        }
        int[] returnArray2 = new int[index];
        for(int i=0; i<index; i++){
            returnArray2[i] = returnArray[i];
        }
        return returnArray2;
    }
}
