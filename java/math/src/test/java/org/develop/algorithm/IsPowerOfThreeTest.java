package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class IsPowerOfThreeTest {
    Logger log = Logger.getLogger(IsPowerOfThreeTest.class.getName());
    IsPowerOfThree app = new IsPowerOfThree();

    @Test
    public void isPowerOfThree(){
        log.info("" + app.isPowerOfThree(20));
        log.info("" + app.isPowerOfThree(27));
        log.info("" + app.isPowerOfThree(100));
    }
}
