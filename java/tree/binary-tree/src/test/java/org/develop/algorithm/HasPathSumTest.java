package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

public class HasPathSumTest {
    Logger log = Logger.getLogger(HasPathSumTest.class.getName());
    HasPathSum app = new HasPathSum();
    @Test
    public void hasPathSum(){
        log.info("" + app.hasPathSum(TreeNodeUtil.generate(), 20));
    }
}
