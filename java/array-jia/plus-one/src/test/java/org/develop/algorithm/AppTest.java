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
    public void plusOne(){
        logger.info("" + Arrays.toString(app.plusOne(new int[]{1, 2, 3})));
        logger.info("" + Arrays.toString(app.plusOne(new int[]{9, 9, 9})));
        logger.info("" + Arrays.toString(app.plusOne(new int[]{4, 3, 2, 1})));
        logger.info("" + Arrays.toString(app.plusOne(new int[]{4, 4, 4, 4, 4})));
        logger.info("" + Arrays.toString(app.plusOne(new int[]{1, 2, 9})));
    }
}