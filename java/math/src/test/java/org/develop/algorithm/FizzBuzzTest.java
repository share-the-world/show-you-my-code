package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class FizzBuzzTest {
    Logger log = Logger.getLogger(FizzBuzzTest.class.getName()) ;
    FizzBuzz app = new FizzBuzz();

    @Test
    public void fizzBuzz(){
        log.info("" + app.fizzBuzz(15));
    }
}
