package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{

    public ListNode deleteNode(ListNode head, int val) {
         if (head == null) {
            return head;
        }

        if (head.getValue() == val) {
            return head.getNext();
        }

        ListNode preNode = head;
        ListNode curNode = head.getNext();
        while (curNode != null && curNode.getValue() != val) {
            preNode = curNode;
            curNode = curNode.getNext();
        }

        preNode.setNext((curNode==null) ? null : curNode.getNext());
        return head;
    }
}
