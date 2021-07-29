package org.develop.algorithm;

import static org.junit.Assert.assertTrue;

import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @Test
    public void isPalindrome(){
        logger.info("" + app.isPalindrome("A man, a plan, a canal: Panama"));
    }
}
