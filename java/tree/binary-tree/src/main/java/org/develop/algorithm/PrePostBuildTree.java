package org.develop.algorithm;

import java.util.HashMap;
import java.util.Map;

import org.develop.algorithm.common.TreeNode;

public class PrePostBuildTree {
    Map<Integer, Integer> inOrderMap = new HashMap<>();
    /**
     * 中序遍历，根节点在数组正中间
     * 后续遍历根节点在数组最后一位
     * 1. 将中序遍历数组转换成map（ele， index）
     * @param inOrder
     * @param postOrder
     * @return
     */
    public TreeNode buildTree(int[] preOrder, int[] inOrder){
        int length = inOrder.length;
        for (int i = 0; i < length; i++) {
            inOrderMap.put(inOrder[i], i);
        }
        return helper(inOrder, preOrder, 0, length-1, 0, length-1);
    }
    private TreeNode helper(int[] inOrder, int[] preOrder, int in_left, int in_right, int pre_left, int pre_right) {
        if(pre_left > pre_right){
            return null;
        }
        // 二叉树的根就是前序遍历的首位元素
        int rootValue = preOrder[pre_left]; 
              
        // 根据中序遍历生成树，定义生成的树
        TreeNode root = new TreeNode(rootValue);
        // 根节点在中序遍历数组正中间，左边左树，右边右树
        int rootIdx = inOrderMap.get(rootValue);

        // 先序遍历先存左节点，后存右节点，计算左节点的数量
        int pre_left_size = rootIdx - in_left;
        /**
         * 注意这里有需要先创建左子树，再创建右子树的依赖关系。
         * 可以理解为在前序遍历的数组中整个数组是先存储根节点，再存储左子树的节点，
         * 最后存储右子树的节点，如果按每次选择「前序遍历的最后一个节点」为根节点，
         * 则先被构造出来的应该为左子树。
         */
        root.left = helper(inOrder, preOrder, in_left, rootIdx-1, pre_left + 1, pre_left + pre_left_size);
        root.right = helper(inOrder, preOrder, rootIdx + 1, in_right, pre_left + pre_left_size + 1, pre_right);
        return root;
    }
}
