package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     *  时间复杂度：O(N)，只遍历了一次。
        空间复杂度：O(1)。
     */
    public ListNode removeElements(ListNode head, int val){
        if(null==head){
            return head;
        }
        ListNode sentinel = new ListNode(0);
        sentinel.next = head;

        ListNode before = sentinel, curr = head;
        while(null!=curr){
            if(curr.val == val){
                before.next = curr.next;
            }else{
                before = curr;
            }
            curr = curr.next;
        }
        return sentinel.next;
    }
}
