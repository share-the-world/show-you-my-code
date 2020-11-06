package org.develop.algorithm;

import java.util.ArrayList;
import java.util.List;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {
    public int[] doIt( int[] args ){
       List<Integer> list = new ArrayList<>();
       for (int i = 0; i < args.length; i++) {
            list.add(args[i]) ;
       }
       list.sort((e1, e2) -> {
            int count1 = hammingWeight(e1);
            int count2 = hammingWeight(e2);
            if(count1!=count2){
                return count1 - count2;
            }else{
                return e1 - e2;
            }
        });
        for (int i = 0; i < list.size(); i++) {
            args[i] = list.get(i);
        }
        return args;
    }

    public int hammingWeight(int n) {
        int count = 0;
        while (n != 0) {
            n &= n - 1;
            count++;
        }
        return count;
    }
}
