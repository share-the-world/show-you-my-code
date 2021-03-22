package org.develop.algorithm;

import java.util.ArrayList;
import java.util.List;

/**
 * @author hsy
 */
public class FizzBuzz {
    
    public List<String> fizzBuzz(int n){
        List<String> returnList = new ArrayList<>();
        
        for (int i = 1; i <= n; i++) {
            returnList.add(rule(i));
        }
        return returnList;
    }

    private String rule(int n) {
        if(n%3==0 && n%5==0){
            return "FizzBuzz";
        }else if(n%3==0){
            return "Fizz";
        }else if(n%5==0){
            return "Buzz";
        }
        return n + "";
    }

}
