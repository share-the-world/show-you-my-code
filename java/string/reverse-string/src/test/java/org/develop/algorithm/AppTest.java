package org.develop.algorithm;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();
    /**
     * Rigorous Test :-)
     */
    @Test
    public void reserverString(){
        app.reverseString(new char[]{'o','l','l','e','h'});
        app.reverseString(new char[]{'h', 'a', 's', 'h'});
    }
}
