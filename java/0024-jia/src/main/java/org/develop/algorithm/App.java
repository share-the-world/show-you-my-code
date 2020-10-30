package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {
    public Integer[] doIt(String longStr){
        Integer[] returnArray = new Integer[]();
        int index = 0;
        for (int i = 0; i < longStr.length; i++) {
            char[] charArray = longStr.toCharArray();
            for (int j = i; j < charArray.length; j++) {
                if(charArray[i] == charArray[j]){
                    returnArray[index] = i;
                }
            }
        }
        System.out.println(returnArray);
        return returnArray;
    }
}
