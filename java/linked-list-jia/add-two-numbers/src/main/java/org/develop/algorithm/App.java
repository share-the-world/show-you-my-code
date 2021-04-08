package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     * 342 + 465 = 807.
     * @param l1 [2,4,3]
     * @param l2 [5,6,4]
     * @return [7,0,8]
     */
    public ListNode addTwoNumbers(ListNode l1, ListNode l2){
        ListNode head = null, tail = null;   
        int carry = 0;     
        while(null!=l1 || null!=l2){
            int n1 = null!=l1?l1.val : 0;
            int n2 = null!=l2?l2.val : 0;
            int sum = n1 + n2 + carry;
            if(null==head){
                head = tail = new ListNode(sum % 10);
            }else{
                tail = new ListNode(sum % 10);
                tail = tail.next;
            }
            carry = sum / 10;
            if(null != l1){
                l1 = l1.next;
            }
            if(null != l2){
                l2 = l2.next;
            }
        }
        if(carry > 0){
            tail.next = new ListNode(carry);
        }
        return head;
    }
}
