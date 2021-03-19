package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class MaxProfitTest {
    Logger log = Logger.getLogger(MaxProfitTest.class.getName());
    MaxProfit app = new MaxProfit();
    @Test
    public void maxProfit(){
        log.info("" + app.maxProfit(new int[]{7,6,4,3,1}));
        log.info("" + app.maxProfit(new int[]{7,1,5,3,6,4}));
        log.info("" + app.maxProfit(new int[]{1, 2, 3, 4, 5, 6, 7}));
    }
}
