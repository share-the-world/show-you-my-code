package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger log = Logger.getLogger(AppTest.class.getName());
    App app = new App();
    static ListNode head = null;
    static{
        head = new ListNode(1);
        ListNode two = new ListNode(2);
        // ListNode three = new ListNode(2);
        // ListNode four = new ListNode(1);
        head.setNext(two);
        // two.setNext(three);
        // three.setNext(four);
    }
    @Test
    public void isPalindrome1(){
        log.info(""+app.isPalindrome1(head));
    }
    @Test
    public void isPalindrome2(){
        log.info(""+app.isPalindrome2(head));
    }
}
