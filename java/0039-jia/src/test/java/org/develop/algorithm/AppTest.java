package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;


/**
 * Unit test for simple App.
 */
public class AppTest{
    App app = new App();
    @Test
    public void testApp(){
        int[] args = {1024,512,256,128,64,32,16,8,4,2,1};
        int[] expect = {1,2,4,8,16,32,64,128,256,512,1024};
        Assert.assertArrayEquals(expect, app.doIt(args));
    }
}
