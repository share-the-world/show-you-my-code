package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    /**
     * 复杂度分析

    时间复杂度 : O((n+m)log⁡(n+m)
    空间复杂度 : O(1)
     * @param nums1
     * @param m
     * @param nums2
     * @param n
     * @return
     */
    public int[] merge1(int[] nums1, int m, int[] nums2, int n) {
        System.arraycopy(nums2, 0, nums1, m, n);
        Arrays.sort(nums1);
        return nums1;
    }
    /**
     * 双指针 / 从后往前
     * num1, nums2都是有序的，将nums2合并到num1中
     */
    public int[] merge2(int[] nums1, int m, int[] nums2, int n) {
        if(null==nums1){
            return nums2;
        }
        if(null==nums2){
            return nums1;
        }
        int i= m - 1;
        int j= n - 1;
        int k= m + n -1;
        while(i>=0 && j>=0){
            nums1[k--] = (nums1[i] < nums2[j]) ? nums2[j--] : nums1[i--] ;
        }
        System.arraycopy(nums2, 0, nums1, 0, j + 1);
        return nums1;
    }
}
