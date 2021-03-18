package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class ClimbStairsTest {
    Logger log = Logger.getLogger(ClimbStairsTest.class.getName());
    ClimbStairs app = new ClimbStairs();
    @Test
    public void climbStairs(){
        log.info("0 = " + app.climbStairs(0));
        log.info("1 = " + app.climbStairs(1));
        log.info("2 = " + app.climbStairs(2));
        log.info("3 = " + app.climbStairs(3));
        log.info("4 = " + app.climbStairs(4));
        log.info("5 = " + app.climbStairs(5));
        log.info("6 = " + app.climbStairs(6));
        log.info("7 = " + app.climbStairs(7));
        log.info("8 = " + app.climbStairs(8));
    }
}
