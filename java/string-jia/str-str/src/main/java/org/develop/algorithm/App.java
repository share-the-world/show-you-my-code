package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     * 输入: haystack = "helaalo", needle = "laal"
     * 输出: 2
     * @param haystack
     * @param needle
     * @return
     */
    public int strStr2(String haystack, String needle) {
        if(null==needle || "".equals(needle)){
            return 0;
        }
        for (int i = 0; i <= haystack.length()-needle.length(); i++) {
            int j = 0;
            for (; j < needle.length(); j++) {
                if(haystack.charAt(i+j) != needle.charAt(j)){
                    break;
                }
            } 
            if(j == needle.length()){
                return i;
            }
        }
        return -1;
    }
    public int strStr(String haystack, String needle) {
        if(null==needle || "".equals(needle)){
            return 0;
        }
        char[] char1 = haystack.toCharArray();
        char[] char2 = needle.toCharArray();
        for (int i = 0; i <= char1.length-char2.length; i++) {
            int j = 0;
            for (; j < char2.length; j++) {
                if(char1[i+j] != char2[j]){
                    break;
                }
            } 
            if(j == needle.length()){
                return i;
            }
        }
        return -1;
    }
}
