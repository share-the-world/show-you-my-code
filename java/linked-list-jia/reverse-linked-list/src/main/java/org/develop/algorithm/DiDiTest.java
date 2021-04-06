package org.develop.algorithm;

public class DiDiTest {
    
    public ListNode2 towSum(ListNode2 l1, ListNode2 l2){
        if(null==l1){
            return l2;
        }
        if(null==l2){
            return l1;
        }
        int intL1 = reverseLinkList(l1);
        int intL2 = reverseLinkList(l2);
        int sum = intL1 + intL2;

        StringBuilder sumStr = new StringBuilder(sum).reverse();
        return null;
    }

    private int reverseLinkList(ListNode2 head) {
        StringBuilder data = new StringBuilder();
        ListNode2 curr = head;
        while(null!=curr){
            data.append(curr.val);
            curr = curr.next;
        }
        return Integer.parseInt(data.toString());
    }
}
