package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    public boolean hasCycle(ListNode head){
        if(null==head || null==head.next){
            return false;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while(slow != fast){
            if(null==fast || null==fast.next){
                return false;
            }
            fast = fast.next.next;
            slow = slow.next;
        }
        return true;
    }
}
