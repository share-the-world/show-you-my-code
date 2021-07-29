package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    public int firstUniqChar(String args){
        if(null==args || args.length()==0){
            return -1;
        }
        char[] strChar = args.toCharArray();
        int[] data = new int[26];
        for (int i = 0; i < strChar.length; i++) {
            int index = strChar[i] - 'a';
            data[index] += 1;
        }
        for (int i = 0; i < strChar.length; i++) {
            int index = strChar[i] - 'a'; 
            if(data[index] == 1){
                return i;
            }
        }
        return -1;
    }
}
