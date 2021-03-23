package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class HammingWeightTest {
    HammingWeight app = new HammingWeight();
    Logger log = Logger.getLogger(HammingWeightTest.class.getName());

    @Test
    public void hammingWeight(){
        log.info("" + app.hammingWeight(20));
    }
}
