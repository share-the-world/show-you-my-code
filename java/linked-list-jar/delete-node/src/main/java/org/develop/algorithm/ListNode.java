package org.develop.algorithm;
/**
 * 任意一个二叉树包含三个元素：值，左子树，右子树
 * @author heshiyuan 
 */
public class ListNode{
    
    /**
     *
     */
    private Integer value;
    private ListNode next;


    public ListNode(Integer value, ListNode next) {
        this.value = value;
        this.next = next;
    }


    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public ListNode getNext() {
        return next;
    }

    public void setNext(ListNode next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return "ListNode [next=" + next + ", value=" + value + "]";
    }
}
