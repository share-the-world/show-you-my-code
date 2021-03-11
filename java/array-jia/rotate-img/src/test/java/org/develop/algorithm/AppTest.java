package org.develop.algorithm;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    Logger logger = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    @Test
    public void rotateImg(){
        int[][] args = new int[][]{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        app.rotateImg1(args);
    }

    @Test
    public void rotateImg2(){
        int[][] args = new int[][]{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        app.rotateImg2(args);
    }
}
