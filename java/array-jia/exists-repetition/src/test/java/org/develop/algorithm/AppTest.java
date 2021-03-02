package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @org.junit.Test
    public void testExistRepetition(){
        logger.info("" + app.existRepetition(new int[]{}));
        logger.info("" + app.existRepetition(new int[]{1,2,3,1}));
        logger.info("" + app.existRepetition(new int[]{1,2,3,4}));
        logger.info("" + app.existRepetition(new int[]{1,1,1,3,3,4,3,2,4,2}));
    }

    @Test
    public void testExistRepetition2(){
        logger.info("" + app.existRepetition2(new int[]{}));
        logger.info("" + app.existRepetition2(new int[]{1,2,3,1}));
        logger.info("" + app.existRepetition2(new int[]{1,2,3,4}));
        logger.info("" + app.existRepetition2(new int[]{1,1,1,3,3,4,3,2,4,2}));
    }
}
