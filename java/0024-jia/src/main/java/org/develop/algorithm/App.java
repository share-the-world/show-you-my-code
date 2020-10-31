package org.develop.algorithm;

/**
 * "ababcbacadefegdehijhklij"
 * @author heshiyuan
 */
public class App {
    public Integer[] doIt(String longStr){
        Integer[] returnArray = new Integer[longStr.length()];
        // int index = 0;
        for (int i = 0; i < longStr.length(); i++) {
            char[] charArray = longStr.toCharArray();
            for (int j = (i + 1); j < charArray.length; j++) {
                if(charArray[i] == charArray[j]){
                    // returnArray[index ++] = i;
                    System.out.println(charArray[i] + " " + i);
                }
            }
        }
        return returnArray;
    }
}
