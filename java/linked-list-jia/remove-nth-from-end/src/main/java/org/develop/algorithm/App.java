package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     *   输入：head = [1,2,3,4,5], n = 2
     *   输出：[1,2,3,5]
     * {0,1,2,3,4,5}, n = 2
     * 1. 先让first， second间距n各节点
     * 2. first，second同时后移，知道first到底儿，second就是倒数第n个节点
     */
    public ListNode removeNthFromEnd1(ListNode head, int n){
        // 添加哑节点
        ListNode dummy = new ListNode(0, head);
        ListNode first = head;
        ListNode second = dummy;
        for (int i = 0; i < n; ++i) {
            first = first.getNext();
        }
        while (first != null) {
            first = first.getNext();
            second = second.getNext();
        }
        second.setNext(second.getNext().getNext());
        return dummy.getNext();
    }
    /**
     * {0,1,2,3,4,5}, n = 2
     * 1. 获取量表的长度L
     * 2. 找到L-n+1，并将其下一个节点置空
     */
    public ListNode removeNthFromEnd2(ListNode head, int n){
        ListNode dummy = new ListNode(0, head); 
        int length = 0;
        while(null!=head){
            ++ length;
            head = head.getNext();
        }
        ListNode curr = dummy; 
        for (int i = 1; i < (length - n + 1); ++i) {
            curr = curr.getNext();
        }
        curr.setNext(curr.getNext().getNext());
        ListNode ret = dummy.getNext(); 
        return ret;
    }
}
