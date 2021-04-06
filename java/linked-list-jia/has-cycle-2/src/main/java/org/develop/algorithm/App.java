package org.develop.algorithm;

import java.util.Set;

/**
 * Hello world!
 * @author hsy
 */
public class App{
    /**
     * 快慢指针
     * 快指针是慢指针速度2倍
     * @param root
     * @return
     */
    public ListNode hasCycle(ListNode root){
        if(null==root){
            return null;
        }
        ListNode fast = root, slow = root;
        while(null!=fast){
            slow = slow.next;
            if(null==fast.next){
                return null;
            }else{
                fast = fast.next.next;
            }
            // 快慢指针相遇，说明是环形链表，取出入环节点
            if(fast == slow){
                // 一个指针从头开始走,步速一致，slow继续往前走，当二者相等时，就是环形入口
                ListNode curr = root;
                while(slow != curr){
                    slow = slow.next;
                    curr = curr.next;
                }
                return curr;
            }
        }
        return null;
    }
    /**
     * 利用hash算法
     * 挨个将链表每个元素放进set中，如果出现重复，那么此节点就是环形链表的入环口
     * @return
     */
    public ListNode hasCycle2(ListNode head){
        ListNode pos = head;
        Set<ListNode> set = new HashSet<>();
        while(null!=pos){
            if(set.contains(pos)){
                return pos;
            }
            set.add(pos);
            pos = pos.next;
        }
        return null;
    }
}
