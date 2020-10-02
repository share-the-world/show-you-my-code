package org.develop.algorithm;
/**
 * 任意一个二叉树包含三个元素：值，左子树，右子树
 * @author heshiyuan 
 */
public class TreeNode {
    private String value;
    private TreeNode left;
    private TreeNode right; 

    /**
     * 对外提供树构造器
     * @param value
     * @param left
     * @param right
     */
    public TreeNode(String value, TreeNode left, TreeNode right){
        this.value = value;
        this.left = left;
        this.right = right;
    } 

    public TreeNode getLeftNode(){
        return this.left;
    }

    public TreeNode getRightNode(){
        return this.right;
    }

    public String value(){
        return this.value;
    }
}
