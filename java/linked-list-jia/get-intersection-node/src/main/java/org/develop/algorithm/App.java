package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    /**
     * 双指针
     */
    public ListNode getIntersectionNode1(ListNode headA, ListNode headB) {
        ListNode A = headA, B = headB;
        while (A != B) {
            A = A != null ? A.next : headB;
            B = B != null ? B.next : headA;
        }
        return A;
    }
}
