package org.develop.algorithm;
import org.junit.Assert;
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
    public void shouldAnswerWithTrue(){
        Assert.assertTrue(app.lengthOfLastWord("hello world")==5);
    }
}
