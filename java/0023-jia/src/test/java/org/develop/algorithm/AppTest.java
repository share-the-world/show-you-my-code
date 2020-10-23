package org.develop.algorithm;
import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    App app = new App();
    
    @Test
    public void testDoIt(){
        // Assert.assertEquals(false, app.doIt("saeed", "ssaaedd"));
        // Assert.assertEquals(true, app.doIt("alex", "aaleex"));
        Assert.assertEquals(true, app.doIt("vtkgn", "vttkgnn"));
    }
}
