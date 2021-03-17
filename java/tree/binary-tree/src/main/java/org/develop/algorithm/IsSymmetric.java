package org.develop.algorithm;

import org.develop.algorithm.common.TreeNode;

/**
 * 验证是否是对称二叉搜索树
 * @author hsy
 */
public class IsSymmetric {
    /**
     * 递归方式
     */
    public boolean isSymmetric(TreeNode root){
        return check(root, root);
    }
    /**
     * @author hsy
     * 分别校验两个树的左子树，右子树是否相等
     * @param left
     * @param right
     * @return 是否一致
     */
    private boolean check(TreeNode left, TreeNode right){
        if(null==left && null==right){
            return true;
        }
        if(null==left || null==right){
            return false;
        }
        return left.val == right.val &&
               check(left.left, right.right) &&
               check(left.right, right.left)
               ;
    }
}
