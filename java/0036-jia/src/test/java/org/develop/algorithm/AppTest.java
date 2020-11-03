package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();
    
    @Test
    public void testApp(){
        Assert.assertTrue(app.doIt(new int[]{0, 3, 2, 1}));
    }

        
    @Test
    public void testApp2(){
        Assert.assertFalse(app.doIt(new int[]{2, 1}));
    }
}
