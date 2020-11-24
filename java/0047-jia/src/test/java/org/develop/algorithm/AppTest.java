package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    App app = new App();
    /**
     * Rigourous Test :-)
     */
    @Test
    public void testDoIt(){
       int[][] args = {{7,0}, {4,4}, {7,1}, {5,0}, {6,1}, {5,2}};
       Assert.assertArrayEquals(new int[][]{{5,0}, {7,0}, {5,2}, {6,1}, {4,4}, {7,1}}, app.doIt(args));
    }
}
