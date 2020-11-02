package org.develop.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {

    public int[] doIt( int[] args1, int[] args2){
        Set<Integer> array1 = new HashSet<>(args1.length);
        Set<Integer> array2 = new HashSet<>(args2.length);
        for (int i = 0; i < args1.length; i++) {
            array1.add(args1[i]) ;
        }
        for (int i = 0; i < args2.length; i++) {
            array2.add(args2[i]) ;
        }
        array1.retainAll(array2);
        int[] returnArray = new int[array1.size()];

        int index = 0;
        for (int i : array1) {
            returnArray[index++] = i;
        }
        return returnArray;
    }
}
