package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

public class TreeNodeLinkTest {
    Logger log = Logger.getLogger(TreeNodeLinkTest.class.getName()) ;
    TreeNodeLink app = new TreeNodeLink();

    @Test
    public void connect1(){
        log.info("" + app.connect1(null));
    }
}
