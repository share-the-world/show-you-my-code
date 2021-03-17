package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

/**
 * @author hsy
 */
public class IsValidBstTest {
    Logger log = Logger.getLogger(IsValidBst.class.getName());
    IsValidBst app = new IsValidBst();
    @Test
    public void isValidBst1(){
        log.info("" + app.isValidBst(TreeNodeUtil.generate()));
    }
}
