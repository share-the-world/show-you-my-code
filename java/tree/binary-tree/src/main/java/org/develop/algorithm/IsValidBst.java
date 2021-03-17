package org.develop.algorithm;

import org.develop.algorithm.common.TreeNode;

/**
 * 验证是否是二叉搜索树
 * @author hsy
 */
public class IsValidBst{
    /**
     * 时间复杂度 : O(n)，其中 n 为二叉树的节点个数。在递归调用的时候二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)。
     * 空间复杂度 : O(n)，其中 n 为二叉树的节点个数。递归函数在递归过程中需要为每一层递归函数分配栈空间，
     * 所以这里需要额外的空间且该空间取决于递归的深度，即二叉树的高度。最坏情况下二叉树为一条链，树的高度为 n ，
     * 递归最深达到 n 层，故最坏情况下空间复杂度为 O(n) 。
     * @param treeNode
     * @return
     */
    public boolean isValidBst(TreeNode root){
        return isValidBst(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    /**
     * @author hsy
     * @param root 跟节点
     * @param lower 下界
     * @param upper 上届
     * @return 是否是二叉搜索树
     */
    private boolean isValidBst(TreeNode root, long lower, long upper){
        if(null==root){
            return true;
        }
        if(root.val <= lower || root.val >= upper){
            return false;
        }
        return isValidBst(root.left, lower, root.val) && 
               isValidBst(root.right, root.val, upper);
    }
}