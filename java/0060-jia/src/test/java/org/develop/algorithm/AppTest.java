package org.develop.algorithm;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();
    @Test
    public void testDoIt(){
        assertEquals(4, app.doIt(10));
    }

    @Test
    public void testDoIt1(){
        assertEquals(0, app.doIt(1));
    }

    @Test
    public void testDoIt2(){
        assertEquals(25, app.doIt(100));
    }
}
