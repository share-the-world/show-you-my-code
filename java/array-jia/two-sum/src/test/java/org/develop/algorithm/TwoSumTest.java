package org.develop.algorithm;

import junit.framework.TestCase;
import org.junit.Assert;
import org.junit.Test;

/**
 * @author heshiyuan
 * @date 2021/9/17 19:57
 */
public class TwoSumTest extends TestCase {
    TwoSum twoSum = new TwoSum();
    int[] array = new int[]{0, 1, 1, 10};

    @Test
    public void testTwoSum2() {
        Assert.assertArrayEquals(twoSum.twoSum2(array, 2), new int[]{1, 2});
    }

    @Test
    public void testTwoSum() {
        Assert.assertArrayEquals(twoSum.twoSum(array, 2), new int[]{1, 2});
    }

    @Test
    public void testTwoSum1() {
        Assert.assertArrayEquals(twoSum.twoSum(array, 2), new int[]{1, 2});
    }
}