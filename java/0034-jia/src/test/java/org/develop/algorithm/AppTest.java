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
        int[][] args = 
        {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };
        int[][] returnArray = {
            {7, 4, 1},
            {8, 5, 2},
            {9, 6, 3}
        };
        Assert.assertArrayEquals(returnArray, app.doIt(args));
    }
}
