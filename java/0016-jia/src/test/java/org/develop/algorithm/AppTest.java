package org.develop.algorithm;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue(){
        App app = new App();
        // ["cool","lock","cook"]
        String[] args = {"bella", "label", "roller"};
        app.soluation(args);    
    }
}
