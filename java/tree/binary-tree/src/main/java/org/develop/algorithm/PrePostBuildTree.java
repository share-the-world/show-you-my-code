package org.develop.algorithm;

import java.util.HashMap;
import java.util.Map;

import org.develop.algorithm.common.TreeNode;

public class PrePostBuildTree {
    int[] inOrder ;
    int post_last_idx = 0;
    int[] preOrder;
    Map<Integer, Integer> inOrderMap = new HashMap<>();
    /**
     * 中序遍历，根节点在数组正中间
     * 后续遍历根节点在数组最后一位
     * 1. 将中序遍历数组转换成map（ele， index）
     * @param inOrder
     * @param postOrder
     * @return
     */
    public TreeNode buildTree(int[] inOrder, int[] preOrder){
        this.inOrder = inOrder;
        this.preOrder = preOrder;
        int idx = 0;
        for (int i : inOrder) {
            inOrderMap.put(i, idx ++);
        }
        return helper(0, preOrder.length-1);
    }
    private TreeNode helper(int left, int right) {
        if(left > right){
            return null;
        }
        // 取出来二叉树的根
        int rootValue = preOrder[post_last_idx]; 
              
        // 根据中序遍历生成树，定义生成的树
        TreeNode root = new TreeNode(rootValue);
        // 根节点在中序遍历数组正中间，左边左树，右边右树
        int rootIdx = inOrderMap.get(rootValue);   
        post_last_idx++;
        /**
         * 注意这里有需要先创建左子树，再创建右子树的依赖关系。
         * 可以理解为在前序遍历的数组中整个数组是先存储根节点，再存储左子树的节点，
         * 最后存储右子树的节点，如果按每次选择「前序遍历的最后一个节点」为根节点，
         * 则先被构造出来的应该为左子树。
         */
        root.left = helper(left, rootIdx-1);
        root.right = helper(rootIdx + 1, right);
        return root;
    }
}
