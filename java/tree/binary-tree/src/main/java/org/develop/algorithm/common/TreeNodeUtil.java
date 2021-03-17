package org.develop.algorithm.common;
/**
 * @author hsy
 */
public class TreeNodeUtil {
   
    public static TreeNode generate(){
        TreeNode root = new TreeNode(1);
        TreeNode one = new TreeNode(2);
        TreeNode two = new TreeNode(3);
        TreeNode three = new TreeNode(4);
        TreeNode four = new TreeNode(5);
        TreeNode five = new TreeNode(6);
        TreeNode six = new TreeNode(7);
        TreeNode seven = new TreeNode(8);
        root.left = one;
        root.right = two;
        one.left = three;
        one.right = four;
        two.left = five;
        two.right = six;
        return root;
    }
}
