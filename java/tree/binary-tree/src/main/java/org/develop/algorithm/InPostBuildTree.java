package org.develop.algorithm;

import java.util.HashMap;
import java.util.Map;

import org.develop.algorithm.common.TreeNode;
/**
 * 中序，后序构建树
 * @author hsy
 */
public class InPostBuildTree {
    int[] inOrder ;
    int post_last_idx ;
    int[] postOrder;
    Map<Integer, Integer> inOrderMap = new HashMap<>();
    /**
     * 中序遍历，根节点在数组正中间
     * 后续遍历根节点在数组最后一位
     * 1. 将中序遍历数组转换成map（ele， index）
     * @param inOrder
     * @param postOrder
     * @return
     */
    public TreeNode buildTree(int[] inOrder, int[] postOrder){
        this.inOrder = inOrder;
        this.postOrder = postOrder;
        post_last_idx = postOrder.length - 1;
        int idx = 0;
        for (int i : inOrder) {
            inOrderMap.put(i, idx ++);
        }
        return helper(0, inOrder.length-1);
    }
    private TreeNode helper(int left, int right) {
        if(left > right){
            return null;
        }
        // 取出来二叉树的根
        int rootValue = postOrder[post_last_idx]; 
              
        // 根据中序遍历生成树，定义生成的树
        TreeNode root = new TreeNode(rootValue);
        // 根节点在中序遍历数组正中间，左边左树，右边右树
        int rootIdx = inOrderMap.get(rootValue);   
        // 前一个后序遍历的根
        post_last_idx--;
        /**
         * 注意这里有需要先创建右子树，再创建左子树的依赖关系。
         * 可以理解为在后序遍历的数组中整个数组是先存储左子树的节点，
         * 再存储右子树的节点，最后存储根节点，如果按每次选择「后序遍历的最后一个节点」为根节点，
         * 则先被构造出来的应该为右子树。
         */
        root.right = helper(rootIdx + 1, right);
        root.left = helper(left, rootIdx-1);
        return root;
    }
}
