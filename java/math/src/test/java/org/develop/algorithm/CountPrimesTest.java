package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class CountPrimesTest {
    CountPrimes app = new CountPrimes();
    Logger log = Logger.getLogger(CountPrimesTest.class.getName());
    
    @Test
    public void countPrimes(){
        log.info("" + app.countPrimes(15));
        log.info("" + app.countPrimes(7));
    }

    @Test
    public void countPrimes2(){
        log.info("" + app.countPrimes(15));
        log.info("" + app.countPrimes(7));
    }
}
