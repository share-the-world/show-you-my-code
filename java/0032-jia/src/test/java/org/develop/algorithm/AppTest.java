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
        int[][] array = {
            {0,1,0,0},
            {1,1,1,0},
            {0,1,0,0},
            {1,1,0,0}
        };
        Assert.assertEquals(16, app.doIt(array));
     }

     @Test
     public void testDoIt2(){
        int[][] array = {
            {0,1,0,0}
        };
        Assert.assertEquals(4, app.doIt(array));
     }
}
