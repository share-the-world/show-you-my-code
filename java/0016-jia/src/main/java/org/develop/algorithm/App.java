package org.develop.algorithm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {
    public void soluation( String[] args ){
        Map<Character, Integer> map = new HashMap<>(150);
        for(String arg : args){
            char[] charArray = arg.toCharArray();
            if(null!=charArray&&charArray.length>0){
                for (int i = 0; i < charArray.length; i++) {
                   if(null!=map.get(charArray[i])){
                        map.put(charArray[i], map.get(charArray[i]) + 1);
                   } else {
                        map.put(charArray[i], 1); 
                   }
                }
            }
        }
        List<String> returnList = new ArrayList<>();
        for(Character key : map.keySet()){
            if(null != map.get(key)&& map.get(key) % args.length == 0){
                for (int i = 0; i < map.get(key)/args.length ; i++) {
                    returnList.add(key.toString());
                }
            }
        }
        System.out.println(returnList.toString());
    }
}
