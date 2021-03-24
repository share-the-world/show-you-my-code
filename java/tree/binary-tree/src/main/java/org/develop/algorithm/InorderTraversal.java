package org.develop.algorithm;

import java.util.ArrayList;
import java.util.List;

import org.develop.algorithm.common.TreeNode;

public class InorderTraversal {
    /**
     * 中序遍历：左根右
     * @param root
     * @return
     */
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        recursion(root, ret);
        return ret;
    }

    private void recursion(TreeNode root, List<Integer> ret) {
        if(null==root){
            return ;
        }
        recursion(root.left, ret);
        ret.add(root.val);
        recursion(root.right, ret);
    }
}
