package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    App app = new App();

    @Test
    public void testDoIt(){
        int args[][] = {{1,3}, {-2,2}}; 
        int k = 1;
        Assert.assertArrayEquals(new int[][]{{-2, 2}}, app.doIt(args, k));
    }


    @Test
    public void testDoIt2(){
        int args[][] = {{3,3},{5,-1}, {-2,4}}; 
        int k = 2;
        Assert.assertArrayEquals(new int[][]{{3, 3}, {-2, 4}}, app.doIt(args, k));
    }
}
