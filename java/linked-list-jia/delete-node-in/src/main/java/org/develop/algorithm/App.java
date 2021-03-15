package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App{

    /**
     * 
     */
    public ListNode deleteNode(ListNode node){
        node.setValue(node.getNext().getValue());
        node.setNext(node.getNext().getNext());
        return node;
    }
}
