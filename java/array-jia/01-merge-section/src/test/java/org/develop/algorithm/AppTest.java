package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();

    @Test
    public void testDoIt(){
        int[][] args = {{1,3}, {2,6}, {8,10}, {15,18}} ;
        int[][] expect = {{1,6}, {8,10}, {15,18}};
        Assert.assertArrayEquals(expect, app.doIt(args));
    }
}
