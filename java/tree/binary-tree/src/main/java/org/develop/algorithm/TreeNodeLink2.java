package org.develop.algorithm;

import java.util.LinkedList;
import java.util.Queue;

import org.develop.algorithm.common.TreeLinkedNode;
/**
 * 
 * @author hsy
 */
public class TreeNodeLink2 {
    /**
     * 层序遍历
     * @param root
     * @return
     */
    public TreeLinkedNode connect1(TreeLinkedNode root){
        if(null!=root){
            return root;
        }
        Queue<TreeLinkedNode> queue = new LinkedList<>();
        // 先将第一层添加进去
        queue.add(root);
        while(!queue.isEmpty()){
            int size = queue.size();
            TreeLinkedNode last = null;
            for (int i = 0; i < size; i++) {
                // 取出并删除队列中的首位元素
                TreeLinkedNode curr = queue.poll();
                // 将当前节点的左右节点添加进queue中
                if(null!=curr.left){
                    queue.add(curr.left);
                }
                if(null!=curr.right){
                    queue.add(curr.right);
                }
                // 从第二个起，将当前赋值给前一个的next
                if(0!=i){
                    last.next = curr;
                }
                // 记录下上一个元素，本层前一个元素
                last = curr;
            }
        }
        return root;
    }
}
