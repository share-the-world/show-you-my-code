package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class RomanToIntTest {
    Logger log = Logger.getLogger(RomanToIntTest.class.getName());
    RomanToInt app = new RomanToInt();

    @Test
    public void RomanToInt(){
        log.info("" + app.romanToInt("LVIII"));
        // log.info("" + app.romanToInt("IX"));
    }
}
