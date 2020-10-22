import {ListNode, ListNodeType} from '../../definition'

//这种方式需要遍历两次，时间复杂度为O(2n)，太高
// 1.遍历整个链表，获取链表长度
// 2.计算倒数n个链表的位置是:index=size-n
// 3.再次遍历链表，删除index
const removeNthFromEnd = (head:ListNode,n: number) => {
  if(!head.next) return null;// 只有一个节点的情况
  const size = getListNodeSize(head);
  const targetIndex = size - n;
  let index = 0;
  if (index === targetIndex) return head.next;// 要求删除头节点的情况
  let node: ListNodeType = head;
  let pre: ListNodeType = head;
  while(node) {
    if (index === targetIndex) {// 找到
      pre = node.next;
      node = null;//结束循环
    } else {
      pre!.next = node;
      node = node.next;
      index ++;
    }
  }
  return head;
}

// 获取链表长度
const getListNodeSize = (head:ListNode): number => {
  let size = 0;
  let temp: ListNodeType = head;
  while(temp) {
    size ++;
    temp = temp.next
  }
  return size;
}