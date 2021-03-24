package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class PrePostBuildTreeTest {
    Logger log = Logger.getLogger(PrePostBuildTreeTest.class.getName());
    PrePostBuildTree app = new PrePostBuildTree();
    @Test
    public void inPostBuildTree(){
        log.info("" + app.buildTree(new int[]{3,9,20,15,7}, new int[]{9,3,15,20,7}));
    }
}
