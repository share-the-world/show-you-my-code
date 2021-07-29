package org.develop.algorithm;

import java.util.Set;

/**
 * Hello world!
 *
 */
public class App{
    /**
     * 时间复杂度：O(N)O(N)，其中 NN 是字符串的长度。左指针和右指针分别会遍历整个字符串一次。
     * @param args
     * @return
     */
    public int lengthOfLongestSubstring(String args){
        int l = args.length();
        Set<Character> common = new HashSet<>();
        int right = -1, commonCount = 0;
        for (int i = 0; i < l; ++i) {
            if(i != 0){
                common.remove(args.charAt(i));
            }
            while(right + 1 < l && !common.contains(args.charAt(right + 1))){
                common.add(args.charAt(right + 1));
                right ++;
            }
            commonCount = Math.max(commonCount, right + 1 - i);
        }
        return commonCount;
    }
}
