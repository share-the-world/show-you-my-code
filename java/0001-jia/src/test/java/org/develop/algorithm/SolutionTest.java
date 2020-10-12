package org.develop.algorithm;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;

public class SolutionTest {
    /**
     * test case 1
     * [1, null, 2, 3]
     */
    @Test
    public void testDoIt1(){
        Solution solution = new Solution();
        Integer[] initArray = {1, null, 2, 3};
        List<Integer> result = solution.doIt(initArray);
        System.out.println(result);
        Integer[] expect = {3, 2, 1};
        Assert.assertArrayEquals(expect, result.toArray());
    }

    /**
     * test case 2
     *      100
     *  99       200
     *        88
     */
    @Test
    public void testDoIt2(){
        // Solution solution = new Solution();
        // TreeNode three_root = new TreeNode(88);
        // TreeNode two_right = new TreeNode(200, three_root, null);
        // TreeNode two_left = new TreeNode(99);
        // TreeNode root = new TreeNode(100, two_left, two_right);
        // List<Integer> result = solution.doIt(root);
        // System.out.println(result);
        // Integer[] expect = {200, 100, 88, 99};
        // Assert.assertArrayEquals(expect, result.toArray());
    }
}
