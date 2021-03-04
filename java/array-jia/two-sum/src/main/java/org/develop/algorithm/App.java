package org.develop.algorithm;

import java.util.HashMap;
import java.util.Map;

/**
 * Hello world!
 *
 */
public class App {
    /**
     * 高性能 
     * {0, 4, 3, 0}, 0
     */
    public int[] twoSum2(int[] nums, int target){
        Map<Integer, Integer> numsMap = new HashMap<>();
         
        for (int i = 0; i < nums.length; i++) {
           if(numsMap.containsKey(target - nums[i])){
                return new int[]{numsMap.get(target - nums[i]), i};
           } 
           numsMap.put(nums[i], i);
        }
        return null;
    }
    public int[] twoSum(int[] nums, int target){
        if(null==nums || nums.length < 2){
            return new int[]{};
        }
        int[] returnArray = new int[2];
        for (int i = 0; i < nums.length; i++) {
            for (int j = nums.length-1; j > i; j--) {
                if(nums[i] + nums[j] == target){
                    returnArray[0] = i;
                    returnArray[1] = j;
                    break;
                }
            }
        }
        return returnArray;
    }
}
