package org.develop.algorithm;
/**
 * 任意一个二叉树包含三个元素：值，左子树，右子树
 * @author heshiyuan 
 */
public class ListNode{
    
    /**
     *
     */
    public int val;
    public ListNode next;

    public ListNode(Integer value){
        this.value = value;
    }
    public ListNode(Integer value, ListNode next) {
        this.value = value;
        this.next = next;
    }

    @Override
    public String toString() {
        return "ListNode [next=" + next + ", value=" + value + "]";
    }
}
