package org.develop.algorithm;
/**
 * Hello world!
 * 
 * @author hsy
 */
public class App {

    public int[] doItAsc(int[] nums) {
        if (null == nums || nums.length == 0 || nums.length == 1) {
            System.out.println("0   0");
            return nums;
        }

        int count = 0, swapCount = 0;
        // 外层循环仅仅决定比较次数
        for (int i = 0; i < nums.length - 1; i++) {
            // 内存循环决定比较项
            int flag = 0;
            for (int j = 0; j < nums.length - 1 - i; j++) {
                count++;
                if (nums[j] > nums[j + 1]) {
                    swapCount++;
                    int temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                    swapCount ++;
                    flag = 1;
                }
            }
            if(flag == 0){
                break;
            }
        }
        System.out.println(count + "    " + swapCount);
        return nums;
    }
}