package org.develop.algorithm;

import java.io.Serializable;

/**
 * 任意一个二叉树包含三个元素：值，左子树，右子树
 * @author heshiyuan 
 */
public class TreeNode implements Serializable{
    
    /**
     *
     */
    private static final long serialVersionUID = 515515009137985766L;
    private Integer value;
    private TreeNode left;
    private TreeNode right; 
    public TreeNode(){}
    /**
     * 对外提供树构造器
     * @param value
     * @param left
     * @param right
     */
    public TreeNode(Integer value){
        this.value = value;
    }
    public TreeNode(Integer value, TreeNode left, TreeNode right){
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

    public Integer value(){
        return this.value;
    }
    public void setLeftNode(TreeNode leftNode){
        this.left = leftNode;
    }
    public void setRightNode(TreeNode rightNode){
        this.right = rightNode;
    }
    public void setValue(Integer value){
        this.value = value;
    }
    
}
