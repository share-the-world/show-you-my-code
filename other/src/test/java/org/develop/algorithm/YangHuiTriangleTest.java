package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class YangHuiTriangleTest {
    Logger log = Logger.getLogger(YangHuiTriangleTest.class.getName());
    YangHuiTriangle app = new YangHuiTriangle();
    @Test
    public void yangHuiTriangle(){
        log.info("" + app.generate(30));
    }
}
