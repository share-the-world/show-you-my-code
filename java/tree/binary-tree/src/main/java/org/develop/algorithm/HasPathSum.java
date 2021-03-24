package org.develop.algorithm;

import org.develop.algorithm.common.TreeNode;

/**
 * 二叉树路径之和
 * @author hsy
 */
public class HasPathSum {
    /**
     *  时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
        空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，
        最坏情况下，树呈现链状，空间复杂度为 O(N)。
        平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log N)。
     * @param root
     * @param targetSum
     * @return
     */
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(null == root){
            return false;
        }
        if(null==root.left && null==root.right){
            return targetSum == root.val;
        }
        return hasPathSum(root.left, targetSum-root.val) ||
               hasPathSum(root.right, targetSum-root.val)
        ;
    }
}
