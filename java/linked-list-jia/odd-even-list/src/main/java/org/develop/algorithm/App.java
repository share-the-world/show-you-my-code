package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     * 奇偶节点
     */
    public ListNode oddEvenList(ListNode head){
        if(null==head){
            return null;
        }
        // 奇数 , even=偶数
        ListNode evenHead = head.next;
        ListNode odd = head, even = evenHead;
        while(null!=even && null!=even.next){
            odd.next = even.next;
            odd = even.next;
            even.next = odd.next;
            even = odd.next;
        }
        odd.next = evenHead;
        return head;
    }
}
