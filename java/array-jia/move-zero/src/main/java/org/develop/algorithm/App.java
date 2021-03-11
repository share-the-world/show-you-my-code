package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    /**
     * 输入: [0,1,0,3,12]
     * 输出: [1,3,12,0,0]
     * 双指针解法
     */
    public int[] moveZero(int[] nums){
        if(null==nums || nums.length==0 || nums.length ==1 ){
            return nums;
        }
        int j=0;
        for (int i = 0; i < nums.length; i++) {
            if(nums[i] != 0){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j ++;
            }
        }
        return nums;
    }
}
