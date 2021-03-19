package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class RobTest {
    Logger log = Logger.getLogger(RobTest.class.getName());
    Rob app = new Rob();
    @Test
    public void rob(){
        log.info("" + app.rob(new int[]{2,7,9,3,1}));
        log.info("" + app.rob(new int[]{1,2,3,1}));
        log.info("" + app.rob(new int[]{1}));
        log.info("" + app.rob(new int[]{2 , 2, 2, 2, 2}));
    }
}
