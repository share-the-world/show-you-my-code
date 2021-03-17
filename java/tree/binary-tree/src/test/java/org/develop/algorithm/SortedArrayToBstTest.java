package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class SortedArrayToBstTest {
    SortedArrayToBst app = new SortedArrayToBst();
    Logger log = Logger.getLogger(SortedArrayToBstTest.class.getName());

    @Test
    public void sortedArrayToBst(){
        log.info("" + app.sortedArrayToBst(new int[]{1, 2, 3, 4, 5}));
    }
}
