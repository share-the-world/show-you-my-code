package org.develop.algorithm;

import java.beans.Transient;
import java.util.logging.Logger;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger logger = Logger.getLogger(AppTest.class.getName());
   App app = new App();
   @Test
   public void testDoIt(){
       Assert.assertArrayEquals(new int[]{1, 3, 5, 9}, app.doIt(new int[]{3, 1, 9, 5}));
   }
   @Test
   public void testDoIt2(){
    Assert.assertArrayEquals(new int[]{1, 3, 4, 7, 9}, app.doIt(new int[]{9, 7, 4, 3, 1}));
    }
    @Test
    public void testDoIt3(){
        logger.info(""); 
    }
}
