package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App{
    /**
     * @param args {1, 2, 2, 3, 3}
     */
    public int doIt(int[] args){
        if(null==args || args.length == 0){
            return 0;
        }
        if(args.length == 1){
            return 1;
        }
        int i=0, j=1;
        while(j < args.length){
            if(args[i] != args[j]){
                args[i+1] = args[i];
                j ++;
            }
            i ++;
        }
        return j;
    }
}
