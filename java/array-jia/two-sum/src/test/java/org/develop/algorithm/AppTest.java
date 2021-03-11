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
    public void twoSum(){
        logger.info("" + Arrays.toString(app.twoSum(new int[]{2, 7, 11, 15}, 18)));
        logger.info("" + Arrays.toString(app.twoSum(new int[]{3, 3}, 6)));
        logger.info("" + Arrays.toString(app.twoSum(new int[]{0, 4, 3, 0}, 0)));
    }
    @Test
    public void twoSum2(){
        logger.info("" + Arrays.toString(app.twoSum2(new int[]{2, 7, 11, 15}, 18)));
        logger.info("" + Arrays.toString(app.twoSum2(new int[]{3, 3}, 6)));
        logger.info("" + Arrays.toString(app.twoSum2(new int[]{0, 4, 3, 0}, 0)));
    }
}
