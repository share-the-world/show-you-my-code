package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    /**
     *  输入: s = "anagram", t = "nagaram"
     *  输出: true
     */
    public boolean isAnagram(String s, String t){
        if(s.length() != t.length()){
            return false;
        }
        int[] data = new int[26];
        char[] sArray = s.toCharArray();
        for (int i = 0; i < sArray.length; i++) {
            data[sArray[i] - 'a'] += 1;
        }
        char[] tArray = t.toCharArray();
        for (int i = 0; i < tArray.length; i++) {
            data[tArray[i] - 'a'] -= 1;
        }
        for (int i = 0; i < data.length; i++) {
            if(data[i] != 0){
                return false;
            }
        }
        return true;
    }
}
