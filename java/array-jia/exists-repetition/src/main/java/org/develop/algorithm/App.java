package org.develop.algorithm;

import java.util.Arrays;
import java.util.stream.IntStream;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    public boolean existRepetition(int[] args){
        if(null == args || args.length == 0){
            return false;
        }
        return IntStream.of(args).distinct().count() != args.length;
    }

    public boolean existRepetition2(int[] args){
        if(null == args || args.length == 0){
            return false;
        }
        // 先排序
        Arrays.sort(args);
        // 判断连续的两个元素相等，
        for(int i=0; i<args.length-1; i++){
            if(args[i] == args[i+1]){
                return true;
            }
        }
        return false;
    }
}
