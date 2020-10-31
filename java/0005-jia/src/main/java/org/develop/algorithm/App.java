package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {
    
    public int[] doIt(int[] array, int target){
        if(null==array || array.length==0){
            return new int[]{};
        }
        int[] returnArray = new int[2];
        int index = 0;
        for (int i = 0; i < array.length; i++) {
            for (int j = array.length-1; j > i; j--) {
                if(array[i] + array[j] == target){
                    returnArray[index++] = i; 
                    returnArray[index++] = j;
                    System.out.println(i + " " + j);
                }
            }
        }
        return returnArray;
    }
}
