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
    public List<Integer> doIt(Integer[] treeArray){
        List<Integer> result = new ArrayList<>();
        TreeNode root = buildTreeNode(treeArray, 0);
        recursion(result, root);
        return result;
    }

    /**
     * 将数组转换成普通二叉树
     * 
     * @param treeArray
     * @return
     */
    public TreeNode buildTreeNode(Integer[] treeArray, Integer index){
        if(null==treeArray || treeArray.length == 0){
            return null;
        }
        if(index >= treeArray.length){
            return null;
        }
        Integer value = treeArray[index];
        if(null == value){return null;}
        TreeNode currentRoot = new TreeNode(value);
        currentRoot.setValue(value);
        currentRoot.setLeftNode(buildTreeNode(treeArray, 2 * index + 1));
        currentRoot.setRightNode(buildTreeNode(treeArray, 2 * index + 2));
        return currentRoot;
    }

    /**
     * 后序算法：后序遍历就是从二叉树的根结点出发，当第三次到达结点时就输出结点数据，按照先向左在向右的方向访问。
     * @param result 定义返回的数据结果
     * @param root 单节点的二叉树
     */
    public void recursion(List<Integer> result, TreeNode root){
        if(null == root) {return ;}
        recursion(result, root.getLeftNode());
        recursion(result, root.getRightNode());
        result.add(root.value());
    }
}
