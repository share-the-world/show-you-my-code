package org.develop.algorithm;

import org.develop.algorithm.common.TreeNode;

/**
 * Hello world!
 * @author hsy
 */
public class MaxDepth{
    /**
     * 深度优先
     * 时间复杂度：O(n)，其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次。
     * 空间复杂度：O(height)，其中 height 表示二叉树的高度。递归函数需要栈空间，
     * 而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。
     */
    public int maxDepthDfs(TreeNode root){
        if(null==root){
            return 0;
        }else{
            int maxLeftDepth = maxDepthDfs(root.left);
            int maxRightDepth = maxDepthDfs(root.right);
            return Math.max(maxLeftDepth, maxRightDepth) + 1;
        }
    }
    /**
     * 广度优先
     * @param root
     * @return
     */
    public int maxDepthBfs(TreeNode root){

        return 0;
    }
}
