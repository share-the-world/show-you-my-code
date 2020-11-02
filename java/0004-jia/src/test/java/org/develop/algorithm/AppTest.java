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
        Assert.assertEquals(3, app.doIt("aA", "aAAbbbb"));
    }

    @Test
    public void testDoIt2(){
        Assert.assertEquals(0, app.doIt("z", "ZZ"));
    }
}
