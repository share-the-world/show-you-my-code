package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    /**
     *  输入: nums = [1,2,3,4,5,6,7], k = 3
        输出: [5,6,7,1,2,3,4]
        解释:
        向右旋转 1 步: [7,1,2,3,4,5,6]
        向右旋转 2 步: [6,7,1,2,3,4,5]
        向右旋转 3 步: [5,6,7,1,2,3,4]
     */
    public int[] rotateArray(int[] args, int k){
        // 右移位数超过数组长度，取余
        k = k % args.length;
        int[] returnArray = new int[args.length];
        for (int i = 0; i < args.length; i++) {
            int index = k + i;
            if(index < args.length){
                returnArray[index] = args[i];
            }else{
                returnArray[index % args.length] = args[i];
            }
        }
        return returnArray;
    }
}
