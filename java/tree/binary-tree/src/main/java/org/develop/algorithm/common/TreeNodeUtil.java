package org.develop.algorithm.common;
/**
 * @author hsy
 */
public class TreeNodeUtil {
   
    public static TreeNode generate(){
        TreeNode root = new TreeNode(10);
        TreeNode one = new TreeNode(4);
        TreeNode two = new TreeNode(55);
        TreeNode three = new TreeNode(4);
        TreeNode four = new TreeNode(77);
        TreeNode five = new TreeNode(23);
        TreeNode six = new TreeNode(10);
        TreeNode seven = new TreeNode(23);
        root.left = one;
        root.right = two;
        one.left = three;
        one.right = four;
        two.left = five;
        two.right = six;
        return root;
    }
}
