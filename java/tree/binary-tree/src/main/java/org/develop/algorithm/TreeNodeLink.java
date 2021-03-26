package org.develop.algorithm;

import java.util.LinkedList;
import java.util.Queue;

import org.develop.algorithm.common.TreeLinkedNode;

public class TreeNodeLink {
    /**
     * 方法一：层序遍历
     * 时间复杂度：O(N)。每个节点会被访问一次且只会被访问一次，即从队列中弹出，并建立 {next} 指针。
       空间复杂度：O(N)。这是一棵完美二叉树，它的最后一个层级包含 N/2 个节点。
       广度优先遍历的复杂度取决于一个层级上的最大元素数量。这种情况下空间复杂度为 O(N)。
     */
    public TreeLinkedNode connect1(TreeLinkedNode root) {
        if(null == root){
            return root;
        }
        Queue<TreeLinkedNode> currLevel = new LinkedList<>();
        // 第一层
        currLevel.add(root);
        while(!currLevel.isEmpty()){
            int currLevelSize = currLevel.size();
            for (int i = 0; i < currLevelSize; i++) {
                // 从队首取出元素
                TreeLinkedNode curr = currLevel.poll();
                
                if(i < currLevelSize-1){
                    //Retrieves, but does not remove, the head of this queue
                    // 将剩下的队首元素赋值给上个元素的next
                    curr.next = currLevel.peek();
                }
                // 将当前节点的按照顺序放进queue中
                if(null != curr.left){
                    currLevel.add(curr.left);
                }
                if(null != curr.right){
                    currLevel.add(curr.right);
                }
            }
        }
        return root;
    }
    /**
     * 指针法:高效
     * 时间复杂度：O(N)，每个节点只访问一次。
       空间复杂度：O(1)，不需要存储额外的节点。
     * @param root
     * @return
     */
    public TreeLinkedNode connect2(TreeLinkedNode root) {
        if(null == root){
            return root;
        }
        TreeLinkedNode leftMost = root;
        while(null!=leftMost.left){
            TreeLinkedNode curr = leftMost;
            while(null!=curr){
                curr.left.next = curr.right;
                if(null!=curr.next){
                    curr.right.next = curr.next.left;
                }
                curr = curr.next;
            }
            leftMost = leftMost.left;
        }
        return root;
    }
}
