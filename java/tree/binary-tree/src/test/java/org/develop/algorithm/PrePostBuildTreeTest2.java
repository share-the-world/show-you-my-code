package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class PrePostBuildTreeTest2 {
    Logger log = Logger.getLogger(PrePostBuildTreeTest2.class.getName());
    PrePostBuildTree2 app = new PrePostBuildTree2();
    @Test
    public void prePostBuildTree(){
        // 预期：[3,9,20,null,null,15,7]
        log.info("" + app.buildTree(new int[]{3,9,20,15,7}, new int[]{9,3,15,20,7}));
    }
}
