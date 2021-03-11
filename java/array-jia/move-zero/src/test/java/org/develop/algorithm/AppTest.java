package org.develop.algorithm;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @Test
    public void moveZero(){
        logger.info("" + Arrays.toString(app.moveZero(new int[]{0,1,0,3,12})));
        logger.info("" + Arrays.toString(app.moveZero(new int[]{0})));
        logger.info("" + Arrays.toString(app.moveZero(new int[]{1})));
        logger.info("" + Arrays.toString(app.moveZero(new int[]{0,0, 0})));
        logger.info("" + Arrays.toString(app.moveZero(new int[]{1, 1, 1, 3})));
        logger.info("" + Arrays.toString(app.moveZero(new int[]{0, 0 , 2, 23, 0, 0})));
    }
}
