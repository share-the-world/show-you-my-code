package org.develop.algorithm;

import java.util.logging.Logger;

import org.develop.algorithm.common.TreeNodeUtil;
import org.junit.Test;

public class IsSymmetricTest {
    IsSymmetric app = new IsSymmetric();
    Logger log = Logger.getLogger(IsSymmetricTest.class.getName());
    @Test
    public void isSymmetric(){
        log.info("" + app.isSymmetric(TreeNodeUtil.generate())); 
    } 
}
