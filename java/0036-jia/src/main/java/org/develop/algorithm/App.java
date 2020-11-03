package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {

    public boolean doIt(int[] args){
        if(null == args || args.length <= 2){
            return Boolean.FALSE;
        }
        int i = 0, j = 1 ;
        while(args[j] - args[i] > 0){
            if(j == args.length - 1){
                return Boolean.FALSE;
            }
            i ++; 
            j ++;
        }

        while(j < args.length && args[j] - args[i] < 0){
            if(i == 0){
                return Boolean.FALSE;
            }
            i ++; 
            j ++;
           
        }

        return j == args.length;
    }
}
