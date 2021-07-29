package org.develop.algorithm;

import static org.junit.Assert.assertTrue;

import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @Test
    public void firstUniqChar(){
        logger.info("" + app.firstUniqChar("cc"));
    }

    @Test
    public void firstUniqChar2(){
        logger.info("" + app.firstUniqChar("leetcode"));
    }

    @Test
    public void firstUniqChar3(){
        logger.info("" + app.firstUniqChar("loveleetcode"));
    }
}
