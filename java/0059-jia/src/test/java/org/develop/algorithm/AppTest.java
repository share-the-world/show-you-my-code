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
        int[] args = {3,6,9,1};
        Assert.assertEquals(3, app.doIt(args));
    }

    @Test
    public void testDoIt2(){
        int[] args = {3,6};
        Assert.assertEquals(3, app.doIt(args));
    }
    
    @Test
    public void testDoIt3(){
        int[] args = {3};
        Assert.assertEquals(0, app.doIt(args));
    }

    @Test
    public void testDoIt4(){
        int[] args = {};
        Assert.assertEquals(0, app.doIt(args));
    }

    @Test
    public void testDoIt5(){
        Assert.assertEquals(0, app.doIt(null));
    }
}