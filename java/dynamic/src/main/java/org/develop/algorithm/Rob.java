package org.develop.algorithm;
/**
 * 打家劫舍
 * 
    输入：[2,7,9,3,1]
    输出：12
    解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
         偷窃到的最高金额 = 2 + 9 + 1 = 12 。   
 * @author hsy
 */
public class Rob {
    
    /**
     * 时间复杂度：O(n)，其中 nn 是数组长度。只需要对数组遍历一次。
     * 空间复杂度：O(1)。使用滚动数组，可以只存储前两间房屋的最高总金额，
     * 而不需要存储整个数组的结果，因此空间复杂度是 O(1)。
     * @param nums 数组
     */
    public int rob(int[] nums){
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int length = nums.length;
        if (length == 1) {
            return nums[0];
        }
        int first = nums[0], second = Math.max(nums[0], nums[1]);
        for (int i = 2; i < length; i++) {
            int temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
}
