package org.develop.algorithm;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import org.develop.algorithm.common.TreeNode;

/**
 * 二叉树的层序遍历
 * @author hsy
 */
public class LevelOrder {
    public List<List<Integer>> levelOrder(TreeNode root){
        List<List<Integer>> returnData = new ArrayList<>();
        if(null==root){
            return returnData;
        }
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while(!queue.isEmpty()){
            List<Integer> levelData = new ArrayList<>();
            int currLevelSize = queue.size();
            for (int i = 0; i < currLevelSize; ++i) {
                // 取出queue中第一个元素，并且将其删除
                TreeNode ele = queue.poll();
                levelData.add(ele.val) ;
                if(null!=ele.left){
                    queue.offer(ele.left);
                }
                if(null!=ele.right){
                    queue.offer(ele.right);
                }
            }
            returnData.add(levelData);
        }
        return returnData;
    }
}
