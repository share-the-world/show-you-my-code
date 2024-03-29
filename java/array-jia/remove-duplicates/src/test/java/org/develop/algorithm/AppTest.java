package org.develop.algorithm;

import org.junit.Assert;
import org.junit.Test;

public class AppTest {
    RemoveDuplicates app = new RemoveDuplicates();

    @Test
    public void testDoIt(){
        int[] args = {1, 2, 2};
        Assert.assertEquals(2, app.removeDuplicates2(args));
    }

    @Test
    public void testDoIt1(){
        int[] args = {1};
        Assert.assertEquals(1, app.removeDuplicates2(args));
    }

    @Test
    public void testDoIt2(){
        int[] args = {};
        Assert.assertEquals(0, app.removeDuplicates2(args));
    }

    @Test
    public void testDoIt3(){
        int[] args = {1, 1, 2, 2, 3, 3, 4, 4};
        Assert.assertEquals(4, app.removeDuplicates2(args));
    }
}
