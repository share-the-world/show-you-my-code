package org.develop.algorithm;

import java.util.ArrayList;
import java.util.List;

/**
 * 实现
 * @author heshiyuan
 */
public class Solution {
    /**
     * 右子树 》 值 》左子树
     * @param root 二叉树根节点
     * @return 排序后的数组
     */
    public List<String> doIt(TreeNode root){
        List<String> result = new ArrayList<String>();
        result.add(recursion(result, root));
        return result;
    }

    public String recursion(List<String> result, TreeNode root){
        if(null == root) {return "";}
        result.add(recursion(result, root.getLeftNode()));
        result.add(recursion(result, root.getRightNode()));
        result.add(root.value());
        return root.value();
    }
}
