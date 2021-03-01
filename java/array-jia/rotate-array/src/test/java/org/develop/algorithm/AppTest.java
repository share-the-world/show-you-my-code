package org.develop.algorithm;

import java.util.Arrays;
import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    
    @Test
    public void testApp(){
       logger.info(Arrays.toString(app.rotateArray(new int[]{1,2,3,4,5,6,7}, 3)));         
    }
}
