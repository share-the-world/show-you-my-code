package org.develop.algorithm;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app = new App();
    
    @Test
    public void testDoIt(){
        int[] args = new int[]{4,2,5,7};
        int[] returnArray = app.doIt(args);
        System.out.println("ss = " + returnArray.toString());
    }
}
