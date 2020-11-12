package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {
    public int[] doIt(int[] args){
        if(null==args || args.length == 0){
            return new int[0];
        }
        int i=0, j=1;
        while(i < args.length && j < args.length){
            while(i < args.length && args[i]%2==0){
                i += 2;
            }
            while(j < args.length && args[j]%2==1){
                j += 2;
            }
            if(i<args.length && j<args.length){
                int temp = args[i];
                args[i] = args[j];
                args[j] = temp;
            }
        }
        return args;
    }
}
