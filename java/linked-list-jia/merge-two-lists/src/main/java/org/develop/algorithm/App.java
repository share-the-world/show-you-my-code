package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    public ListNode mergeTwoLists(ListNode first, ListNode second){
        ListNode newNode = new ListNode(-1);
        ListNode curr = newNode;
        while(null!=first && null!=second){
            if(first.getValue() <= second.getValue()){
                curr.setNext(first);
                first = first.getNext();
            }else{
                curr.setNext(second);
                second = second.getNext();
            }
            curr = curr.getNext();
        }
        curr.setNext(null==first?second:first);
        return newNode.getNext();
    }
}
