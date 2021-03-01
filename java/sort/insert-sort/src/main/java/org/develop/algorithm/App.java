package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{

    public int[] insertSort(int[] nums){
        int swapCount = 0;
        int i, j;
        for (i = 1; i < nums.length; i++) {
            int temp = nums[i];
            for (j = i; j > 0 && temp < nums[j - 1]; j--) {
                swapCount ++;
                nums[j] = nums[j - 1];
            }
            nums[j] = temp;
        }
        System.out.println("    " + swapCount);
        return nums;
    }
}
