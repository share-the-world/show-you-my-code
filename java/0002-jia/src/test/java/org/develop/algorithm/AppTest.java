package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();
    
    @Test
    public void testApp(){
        TreeNode three_left = new TreeNode(1);
        TreeNode three_right = new TreeNode(3); 
        TreeNode two_left = new TreeNode(2);
        two_left.setLeftNode(three_left);
        two_left.setRightNode(three_right);
        TreeNode two_right = new TreeNode(7);
        TreeNode one = new TreeNode(4);
        one.setLeftNode(two_left);
        one.setRightNode(two_right);
        System.out.println(app.doIt(one, 5).toString());
    }
}
