package org.develop.algorithm;

import java.util.logging.Logger;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    Logger log = Logger.getLogger(App.class.getName());
    public int[] doItAsc(int[] nums){
        if(null==nums || nums.length == 0){
            return nums;
        }
        for (int i = 0; i < nums.length - 1; i++) {
           for (int j = 0; j < nums.length - 1 - i; j++) {
               if(nums[j] > nums[j+1]){
                int temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp; 
               }
           } 
        }
        return nums;
    }
    public int[] doItDesc(int[] nums){
        if(null==nums || nums.length == 0){
            return nums;
        }
        for (int i = 0; i < nums.length - 1; i++) {
           for (int j = 0; j < nums.length - 1 - i; j++) {
               if(nums[j] < nums[j+1]){
                int temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp; 
               }
           } 
        }
        return nums;
    }
}