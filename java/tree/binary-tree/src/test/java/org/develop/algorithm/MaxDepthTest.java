package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class MaxDepthTest{
    MaxDepth app = new MaxDepth();
    Logger log = Logger.getLogger(MaxDepthTest.class.getName());
    @Test
    public void maxDepthDfs(){
        log.info("" + app.maxDepthDfs(TreeNodeUtil.generate()));
    }
}
