package org.develop.algorithm;
import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger log = Logger.getLogger(AppTest.class.getName());
    
    /**
     * Rigorous Test :-)
     */
    @Test
    public void oddEvenList(){
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        ListNode node3 = new ListNode(3);
        ListNode node4 = new ListNode(4);
        ListNode node5 = new ListNode(5);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        log.info("" + new App().oddEvenList(node1));
    }
}
