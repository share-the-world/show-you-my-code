package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();

    @Test
    public void moveZero() {
        Assert.assertArrayEquals(new int[]{1, 3, 12, 0, 0}, app.moveZero(new int[]{0, 1, 0, 3, 12}));
        Assert.assertArrayEquals(new int[]{0}, app.moveZero(new int[]{0}));
        Assert.assertArrayEquals(new int[]{1}, app.moveZero(new int[]{1}));
        Assert.assertArrayEquals(new int[]{0, 0, 0}, app.moveZero(new int[]{0, 0, 0}));
        Assert.assertArrayEquals(new int[]{1, 1, 1, 3}, app.moveZero(new int[]{1, 1, 1, 3}));
        Assert.assertArrayEquals(new int[]{2, 23, 0, 0, 0, 0}, app.moveZero(new int[]{0, 0, 2, 23, 0, 0}));
    }
}
