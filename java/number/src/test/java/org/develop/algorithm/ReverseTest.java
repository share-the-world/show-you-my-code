package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class ReverseTest {
    Logger log = Logger.getLogger(ReverseTest.class.getName());
    Reverse app = new Reverse();   
    @Test
    public void reverse(){
        log.info("" + app.reverse(1534236469));
    }
}
