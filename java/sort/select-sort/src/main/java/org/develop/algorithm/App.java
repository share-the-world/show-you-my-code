package org.develop.algorithm;

/**
 * Hello world!
 * 
 * @author hsy
 */
public class App {

    public int[] selectSort(int[] nums){
        int temp = 0;
        int count=0, swapCount=0;
        for (int i = 0; i < nums.length - 1; i++) {
            // 认为目前的数就是最小的, 记录最小数的下标
            int minIndex = i;
            for (int j = i + 1; j < nums.length; j++) {
                count ++;
                if (nums[minIndex] > nums[j]) {
                // 修改最小值的下标
                    minIndex = j;
                }
            }
            // 当退出for就找到这次的最小值
            if (i != minIndex) {
                swapCount ++;
                temp = nums[i];
                nums[i] = nums[minIndex];
                nums[minIndex] = temp;
            }
        }
        System.out.println(count + "    " + swapCount);
        return nums;
    }       
}
