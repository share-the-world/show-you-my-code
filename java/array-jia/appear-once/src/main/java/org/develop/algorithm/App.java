package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    public int appearOnce(int[] args){
        if(null == args || args.length == 0){
            return 0;
        }
        Arrays.sort(args);
        if(args[0] != args[1]){
            return args[0];
        }
        if(args[args.length-1] != args[args.length-2]){
            return args[args.length-1];
        }
        for(int i=1; i<args.length-2; i++){
            if(args[i-1] != args[i] && args[i+1] != args[i]){
                return args[i];
            }
        }
        return -1;
    }
}
