package org.develop.algorithm;
import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @Test
    public void strStr(){
        logger.info(""+app.strStr("hello", "ll"));
    }

    @Test
    public void strStr2(){
        logger.info(""+app.strStr("aaaaa", "bba"));
    }
    @Test
    public void strStr3(){
        logger.info(""+app.strStr("", "a"));
    }
    @Test
    public void strStr4(){
        logger.info(""+app.strStr("a", "a"));
    }
}
