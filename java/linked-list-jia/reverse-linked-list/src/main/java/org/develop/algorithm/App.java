package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{

    public ListNode reverseList(ListNode head){
        ListNode before = null;
        ListNode curr = head;
        while(null!=curr){
            ListNode next = curr.getNext();
            curr.setNext(before);
            before = curr;
            curr = next;
        }
        return before;
    }
    /**
     * {1, 2, 3, 4, 5}
     * @param head
     * @return
     */
    public ListNode reverseList2(ListNode head){
        if(null==head || null==head.getNext()){
            return head;
        }
        ListNode newHead = reverseList2(head.getNext());
        head.getNext().setNext(head);
        head.setNext(null);
        return newHead;
    }
}
