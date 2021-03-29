package org.develop.algorithm;

public class CustomLinkedList {
    int size ;
    ListNode head;
    public CustomLinkedList() {
        size = 0;
        head = new ListNode(0);
    }
    /** 
     * Get the value of the index-th node in the linked list. 
     * If the index is invalid, return -1. 
     */
    public int get(int index) {
        if(index < 0 || index > size){
            return -1;
        }
        ListNode curr = head;
        for (int i = 0; i < index; i++) {
            head = head.next;
        }
        return curr.val;
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    public void addAtHead(int val) {
        addAtIndex(0, val);
    }
    
    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        addAtIndex(size, val);
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    public void addAtIndex(int index, int val) {
        if(index > size || index < 0){
            return;
        }
        ++size;
        ListNode indexNode = new ListNode(val);  
        ListNode curr = head;
        for (int i = 0; i < index; ++i) {
            curr = curr.next;
        }
        ListNode temp = curr.next;
        curr.next = indexNode;
        indexNode.next = temp;
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        ListNode curr = head;
        for (int i = 0; i < index; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
}
