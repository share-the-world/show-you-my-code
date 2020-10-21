package org.develop.algorithm;

import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {

    public void doIt(ListNode head){
        Deque<Integer> queue = new LinkedList<>();
        while(null!=head){
            queue.add(head.getValue());
            head = head.getNext();
        }

        List<Integer> returnList = new ArrayList<>();
        while(!queue.isEmpty()){
            Integer first = queue.peekFirst();
            if(null!=first){
                returnList.add(queue.peekFirst());
                queue.removeFirst();
            }
            Integer last = queue.peekLast();
            if(null!=last){
                returnList.add(queue.peekLast());     
                queue.removeLast();
            }
        }
        System.out.println("==" + returnList.toString());
    }
}
