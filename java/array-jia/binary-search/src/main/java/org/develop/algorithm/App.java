package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 *
 */
public class App{
    /**
     * 时间复杂度：O(log⁡n)。搜索空间每次减少一半，因此时间复杂度为 O(log⁡n)。
     * 空间复杂度：O(1)。
     */
    public int binarySearch(int[] nums1, int n){
        Arrays.sort(nums1);
        int left = 0;
        int right = nums1.length-1;
        int count = 0;
        while(left < right){
            count ++;
            int middle = left + ((right - left) >> 1);
            if(nums1[middle] == n){
                return count;
            }else if(nums1[middle] > n){
                right = middle;
            }else{
                left = middle + 1;
            }
        }
        return count;
    }
}
