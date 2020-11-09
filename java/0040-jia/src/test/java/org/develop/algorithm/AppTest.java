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
        int expect = 7;
        Assert.assertEquals(expect, app.doIt(new int[]{7,1,5,3,6,4}));
    }

    @Test
    public void testDoIt2(){
        int expect = 0;
        Assert.assertEquals(expect, app.doIt(new int[]{7,6,4,3,1}));
    }
}
