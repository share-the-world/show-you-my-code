package org.develop.algorithm;

import java.util.List;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    public booelan isPalindrome1(ListNode head){
        List<Integer> listNode = new ArrayList();

        ListNode curr = head;
        while(null!=curr){
            listNode.add(curr.getValue());
            curr = curr.getNext();
        }
        int start=0, end=listNode.size()-1;
        while (start < end) {
            if(!(listNode.get(start).equals(listNode.get(end)))){
                return false;
            }
            start ++;
            end --;
        }
        return true;
    }
    /**
     * 整个流程可以分为以下五个步骤：
        找到前半部分链表的尾节点。
        反转后半部分链表。
        判断是否回文。
        恢复链表。
        返回结果。
     */
    public booelan isPalindrome2(ListNode head){
        ListNode halfNode = getHalfNode(head);
        ListNode reverseNode = reverseList(halfNode);
        ListNode start = head;
        ListNode half = reverseNode;
        boolean result = true;
        while(result && null!=half){
            if(!start.getValue().equals(half.getValue())){
                result = false;
            }
            start = start.getNext();
            half = half.getNext();
        }
        half.setNext(reverseNode(half));
        return result;
    }
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
     * 根据快慢节点查到链表长度
     * Speed(fast) = 2 * Speed(slow)
     */
    public ListNode getHalfNode(ListNode head){
        ListNode fast = head;
        ListNode slow = head;
        while(null!=fast && null!=fast.getNext()){
            fast = head.getNext().getNext();
            slow = head.getNext();
        }
        return slow;
    }
}
