import {ListNode, ListNodeType} from '../../definition'
import * as TestCase from './TestCase'

// 链表中是否存在环。快慢指针（龟兔赛跑法）
const hasCycle = (head?: ListNode): boolean => {
  if (!head || !head.next) return false; // 要形成环，最少得有两个元素
  let slow = head;
  let fast:ListNodeType = head.next;
  do {
    if (!fast || !fast.next) return false;// 如果最后一个next为空，说明无环
    slow = slow.next!; // 走一步
    fast = fast.next.next; // 走两步
  } while (slow !== fast);
  return true;// 如果循环执行结束了，说明存在fast=slow的情况，此时证明有换
}

// 执行：yarn run ts-node src/code/010/index.ts 
(() => {
  const res1 = hasCycle(TestCase.getCase1())
  console.log('是否存在环1？：',res1)
  const res2 = hasCycle(TestCase.getCase2())
  console.log('是否存在环2？：',res2)
})()