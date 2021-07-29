package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     * Arrays.sort(nums); 性能远高于插入排序
     * @param nums
     * @return
     */
    public int[] insertSort(int[] nums){
        int i, j;
        // 默认第一个已经排好序
        for (i = 1; i < nums.length; i++) {
            int temp = nums[i];
            for (j = i; j > 0 && temp < nums[j - 1]; j--) {
                nums[j] = nums[j - 1];
            }
            nums[j] = temp;
        }
        return nums;
    }
}
