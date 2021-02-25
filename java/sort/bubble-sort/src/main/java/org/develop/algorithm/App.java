package org.develop.algorithm;

import java.util.Arrays;
import java.util.logging.Logger;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    Logger log = Logger.getLogger(App.class.getName());
    public int[] doIt(int[] nums){
        if(null==nums || nums.length == 0){
            return nums;
        }
        log.info("before = " + Arrays.asList(nums).toString());
        for (int i = 0; i < nums.length; i++) {
           for (int j = i; j < nums.length; j++) {
               if(nums[i] > nums[j]){
                   swap(nums, i, j);
               }
           } 
        }
        log.info("after = " + Arrays.asList(nums).toString());
        return nums;
    }

    public int[] doIt2(int[] nums){
        if(null==nums || nums.length == 0){
            return nums;
        }
        log.info("before = " + Arrays.asList(nums).toString());
        for (int i = 0; i < nums.length; i++) {
           for (int j = 0; j < nums.length - i; j++) {
               if(nums[j] > nums[j+1]){
                   swap(nums, j, j+1);
               }
           } 
        }
        log.info("after = " + Arrays.asList(nums).toString());
        return nums;
    }

    public void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp; 
    }
}