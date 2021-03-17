package org.develop.algorithm;

import org.develop.algorithm.common.TreeNode;
/**
 * 
 */
public class SortedArrayToBst {
    /**
     * @author hsy
     * 有序数组转换成平衡二叉搜索树
     */
    public TreeNode sortedArrayToBst(int[] nums){
        return traversal(nums, 0, nums.length-1);
    }
    
    private TreeNode traversal(int[] nums, int left, int right){
        if(left > right){
            return null;
        }
        int mid = (left + right) / 2;
        TreeNode root = new TreeNode(nums[mid]); 
        root.left = traversal(nums, left, mid-1);
        root.right = traversal(nums, mid+1, right);
        return root;
    }
}
