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
        int[] array1 = {1,2,2,1};
        int[] array2 = {2,2};
        Assert.assertArrayEquals(new int[]{2}, app.doIt(array1, array2));
    }
}
