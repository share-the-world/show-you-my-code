package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

public class LevelOrderTest {
    LevelOrder app = new LevelOrder();
    Logger log = Logger.getLogger(LevelOrderTest.class.getName());
    
    @Test
    public void levelOrder(){
        log.info("" + app.levelOrder(TreeNodeUtil.generate()));
    }
}
