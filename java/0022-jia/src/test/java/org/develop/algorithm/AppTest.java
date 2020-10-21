package org.develop.algorithm;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    App app = new App();    
    @Test
    public void testDoIt(){
        ListNode fourNode = new ListNode(4, null);
        ListNode threeNode = new ListNode(3, fourNode);
        ListNode twoNode = new ListNode(2, threeNode);
        ListNode firstNode = new ListNode(1, twoNode);
        app.doIt(firstNode);
    }
}
