package org.develop.algorithm;

import java.util.ArrayList;
import java.util.List;

import org.develop.algorithm.common.TreeNode;

/**
 * 二叉树的后序遍历
 */
public class PreorderTraversal {
    /**
     * 后序遍历：左右根
     * @param root
     * @return
     */
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        recursion(root, ret);
        return ret;
    }

    private void recursion(TreeNode root, List<Integer> ret) {
        if(null==root){
            return ;
        }
        recursion(root.left, ret);
        recursion(root.right, ret);
        ret.add(root.val);
    }
}
