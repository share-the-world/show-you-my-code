package org.develop.algorithm;

import org.junit.Test;

public class SolutionTest {
    
    @Test
    public void testDoIt1(){
        Solution solution = new Solution();
        TreeNode three_right = new TreeNode("3", null, null);
        TreeNode two_right = new TreeNode("2", null, three_right);
        TreeNode root = new TreeNode("1", null, two_right);
        solution.doIt(root);
    }
}
