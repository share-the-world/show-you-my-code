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
class A {
    public A(){
        System.out.println("A");
    }
}

class B extends A{
    public B(){
        System.out.println("B");
    }
    public static void main(String[] args) {
        B b=new B();
    }
}
