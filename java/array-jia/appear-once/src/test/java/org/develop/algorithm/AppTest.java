package org.develop.algorithm;

import java.util.logging.Logger;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @org.junit.Test
    public void appearOnce(){
        logger.info("" + app.appearOnce(new int[]{4,1,2,1,2}));   
    }
}
