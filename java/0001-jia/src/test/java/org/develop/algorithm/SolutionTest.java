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
     * 左斜树
     */
    @Test
    public void testDoIt2(){
        Solution solution = new Solution();
        Integer[] initArray = {1, 2, null, 3, null};
        List<Integer> result = solution.doIt(initArray);
        System.out.println(result);
        Integer[] expect = {3, 2, 1};
        Assert.assertArrayEquals(expect, result.toArray());
    }

    /**
     * test case 3
     * 右斜树
     */
    @Test
    public void testDoIt3(){
        Solution solution = new Solution();
        Integer[] initArray = {1, null, 2, null, 3};
        List<Integer> result = solution.doIt(initArray);
        System.out.println(result);
        Integer[] expect = {3, 2, 1};
        Assert.assertArrayEquals(expect, result.toArray());
    }
    /**
     * test case 4
     * 完全二叉树
     */
    @Test
    public void testDoIt4(){
        Solution solution = new Solution();
        Integer[] initArray = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> result = solution.doIt(initArray);
        System.out.println(result);
        Integer[] expect = {4, 5, 2, 6, 7, 3, 1};
        Assert.assertArrayEquals(expect, result.toArray());
    }

    /**
     * test case 5
     * 满二叉树
     */
    @Test
    public void testDoIt5(){
        Solution solution = new Solution();
        Integer[] initArray = {1, 2, 3, 4, 5};
        List<Integer> result = solution.doIt(initArray);
        System.out.println(result);
        Integer[] expect = {4, 5, 2, 3, 1};
        Assert.assertArrayEquals(expect, result.toArray());
    }
}
