package org.develop.algorithm;

import static org.junit.Assert.assertTrue;

import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger log = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    /**
     * Rigorous Test :-)
     */
    @Test
    public void binarySearch(){
        log.info("" + app.binarySearch(new int[]{1, 2, 3, 4, 5, 6, 7, 8 ,9}, 4));;
    }
}
