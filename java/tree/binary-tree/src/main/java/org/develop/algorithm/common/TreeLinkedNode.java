package org.develop.algorithm.common;

public class TreeLinkedNode {
    public int val;
    public TreeLinkedNode left;
    public TreeLinkedNode right;
    public TreeLinkedNode next;

    public TreeLinkedNode() {
    }

    public TreeLinkedNode(int val) {
        this.val = val;
    }

    @Override
    public String toString() {
        return "{" +
            " val='" + val + "'" +
            ", left='" + left + "'" +
            ", right='" + right + "'" +
            ", next='" + next + "'" +
            "}";
    }
    
}
