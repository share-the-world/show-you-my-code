package org.develop.algorithm;
import java.util.Arrays;
import java.util.logging.Logger;

import org.junit.Test;
/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger log = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    int[] nums1 = new int[]{1,2,3,0,0,0};
    int[] nums2 = new int[]{2, 5, 6};
    @Test
    public void merge(){
        log.info("" + Arrays.toString(app.merge1(nums1, 3, nums2, 3)));
    }
    @Test
    public void merge2(){
        log.info("" + Arrays.toString(app.merge2(nums1, 3, nums2, 3)));
    }
}
