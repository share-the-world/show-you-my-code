package org.develop.algorithm;

import java.util.HashMap;
import java.util.Map;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {
    
    public int doIt(String j, String s){
        char[] jArray = j.toCharArray();
        Map<Character, Character> charMap = new HashMap<>(jArray.length * 2);
        for (int i = 0; i < jArray.length; i++) {
            charMap.put(jArray[i], jArray[i]); 
        } 
        char[] sArr = s.toCharArray();
        int count = 0;
        for (int i = 0; i < sArr.length; i++) {
            if(charMap.get(sArr[i])!=null){
                count ++;
            } 
        }
        System.out.println(count);
        return count;
    }
}
