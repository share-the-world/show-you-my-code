package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    public TreeNode doIt(TreeNode root, Integer curVal){
        if(null == root){
            return new TreeNode(curVal);
        }
        if(root.value() < curVal){
            TreeNode left = doIt(root.getLeftNode(), curVal);
            if(null!=left){
                root.setLeftNode(left);
            }
        }else if(root.value() > curVal){
            TreeNode right = doIt(root.getRightNode(), curVal);
            if(null!=right){
                root.setRightNode(right);   
            }
        }
        return root;
    }
}
