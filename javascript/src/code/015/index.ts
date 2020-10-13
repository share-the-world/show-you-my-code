import {array2LinkedList } from '../../utils/linkedList';
import { ListNode, ListNodeType } from '../../definition'
import { JsxEmit } from 'typescript';

export const swapPairs = (head: ListNode) => {
  const temp: ListNode = { val: 0, next: null}
  const loop = (node: ListNodeType) => {
    if (!node || node.next) return;
    temp.next = node.next; // 第二个节点赋值临时变量
    temp.next!.next = node; // 当前节点挂在第二个节点后面
    node.next = node.next!.next; // 

    loop(node!.next!.next);
  }
}

// 使用while循环，每次移动2个位置，
export const swapPairs1 = (head: ListNodeType) => {
  let start: ListNode = {val: 0, next: null}
  let temp: ListNode = start;
  while(head && head.next) {
    temp.next = head.next;// 第二个节点挂在temp后面
    temp.next!.next = head;// 第一个节点挂在第二个节点后面
    temp.next.next.next = head.next!.next;// 第三个节点挂在第一个节点后面

    // 此时temp加到链表头部，并且指向链表的第二个位置上，应该一定temp位置向下移动一个
    temp = head; // temp指针+1
    head = head.next!.next; // 将链表的指针+2
  }
  return start.next;
}

const swapPairs2 = (head: ListNodeType) => {
  const start: ListNode = { val: 0, next: head };
  let temp = start;
  while(temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = head!.next!.next;

    node2!.next = node1;
    temp.next = node2;
    node1!.next = node2?.next;

    temp = node1!;
    console.log('start:',start)
  }
  return start.next
}

// 执行测试： yarn run ts-node src/code/015/index.ts
(() => {
  const arr1 = [1,2,3,4];
  const link = array2LinkedList(arr1);
  console.log('link:',link)
  console.log(JSON.stringify(swapPairs2(link)))

})()

