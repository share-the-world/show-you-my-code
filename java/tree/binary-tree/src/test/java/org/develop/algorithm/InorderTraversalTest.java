package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

public class InorderTraversalTest {
    Logger log = Logger.getLogger(InorderTraversalTest.class.getName());
    PreorderTraversal app = new PreorderTraversal();
    @Test
    public void preorderTraversal(){
        log.info("" + app.preorderTraversal(TreeNodeUtil.generate()));
    }
}
