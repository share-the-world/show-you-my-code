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
        int[] array = {2, 7, 11, 15};
        Assert.assertArrayEquals(new int[]{0, 1}, app.doIt(array, 9));
    }

    @Test
    public void testDoIt2(){
        int[] array = {1,2,3,5};
        Assert.assertArrayEquals(new int[]{1,2}, app.doIt(array, 5));
    }
    @Test
    public void testDoIt3(){
        int[] array = {-1,2,1,5};
        Assert.assertArrayEquals(new int[]{0,2}, app.doIt(array, 0));
    }
}
