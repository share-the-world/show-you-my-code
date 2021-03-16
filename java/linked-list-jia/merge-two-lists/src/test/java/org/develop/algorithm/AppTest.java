package org.develop.algorithm;

import static org.junit.Assert.assertTrue;

import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    App app = new App();
    Logger log = Logger.getLogger(AppTest.class.getName());
    static ListNode head = null;
    static ListNode head2 = null;
    static{
        head = new ListNode(1);
        ListNode two = new ListNode(2);
        ListNode three = new ListNode(3);
        ListNode four = new ListNode(4);
        ListNode five = new ListNode(5);
        head.setNext(two);
        two.setNext(three);
        three.setNext(four);
        four.setNext(five);
        head2 = head;
    }
    @Test
    public void mergeTwoLists(){
        log.info("ssss=" + app.mergeTwoLists(head, head2));
    }
}
