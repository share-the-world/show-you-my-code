package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class InPostBuildTreeTest {
    Logger log = Logger.getLogger(InPostBuildTreeTest.class.getName());
    InPostBuildTree app = new InPostBuildTree();
    @Test
    public void inPostBuildTree(){
        log.info("" + app.buildTree(new int[]{9,3,15,20,7}, new int[]{9,15,7,20,3}));
    }
}
