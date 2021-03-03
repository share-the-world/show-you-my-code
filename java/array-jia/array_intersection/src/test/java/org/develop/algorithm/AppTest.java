package org.develop.algorithm;

import java.util.Arrays;
import java.util.logging.Logger;

/**
 * Unit test for simple App.
 */
public class AppTest {
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @org.junit.Test
    public void testApp(){
       logger.info("" + Arrays.toString(app.arrayInterSection(new int[]{1,2,2,1}, new int[]{2,2}))) ;
       logger.info("" + Arrays.toString(app.arrayInterSection(new int[]{4,9,5}, new int[]{9,4,9,8,4}))) ;
       logger.info("" + Arrays.toString(app.arrayInterSection(new int[]{}, new int[]{}))) ;
       logger.info("" + Arrays.toString(app.arrayInterSection(new int[]{1}, new int[]{1}))) ;
       logger.info("" + Arrays.toString(app.arrayInterSection(new int[]{3, 1, 2}, new int[]{1, 1}))) ;
    }
} 
