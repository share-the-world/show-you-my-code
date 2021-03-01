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
            // 提前排好序时，跳出循环
            if(flag == 0){
                break;
            }
        }
        System.out.println(count + "    " + swapCount);
        return nums;
    }

    public int[] cocktail(int[] nums){
        if (null == nums || nums.length == 0 || nums.length == 1) {
            System.out.println("0   0");
            return nums;
        } 
        int left = 0, right = nums.length - 1;
        int count=0, swapCount=0;
        while(left < right){
            //先从右到左，把最大的找出来
            for (int i = left; i < right; i++) {
                count ++;
                if(nums[i] > nums[i+1]){
                    swapCount ++;
                    swap(nums, i, i+1);
                }
            }
            right --;
            // 从左到右，将最小的放到左边
            for (int i = right; i > left; i--) {
                count ++;
                if(nums[i-1] > nums[i]){
                    swapCount ++;
                    swap(nums, i-1, i);
                }
            }
            left ++;
        }
        System.out.println(count + "    " + swapCount);
        return nums;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
}