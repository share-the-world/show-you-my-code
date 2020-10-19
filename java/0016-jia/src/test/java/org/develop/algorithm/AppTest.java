package org.develop.algorithm;

import java.util.List;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    @Test
    public void shouldAnswerWithTrue(){
        App app = new App();
        String[] args = {"bella", "label", "roller"};
        // String[] args = {"cool","lock","cook"};
        List<String> returnArray = app.soluation(args);    
        System.out.println("2222=" + returnArray.toString()); 
    }
}
