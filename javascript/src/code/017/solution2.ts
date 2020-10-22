import {ListNode, ListNodeType} from '../../definition'

// 解决思路：方案一复杂度为O(2n)太高,此方案牺牲空间换时间
// 1.遍历整个链表，将各个节点存在数组中
// 2.计算要删除的index=size-n
// 3.删除
const removeNthFromEnd = (head:ListNode,n: number) => {
  const arr: ListNode[] = [];
  const loop = (node: ListNodeType) => {
    if (!node) return;
    arr.push(node)
    loop(node.next);
  }
  loop(head);
  const index = arr.length - n;
  if (index === 0) {// 删除头结点
    return head.next;
  } else if (index === arr.length - 1){// 删除最后一个节点
    arr[index-1].next = null;
    return head
  } {// 中间的某个节点
    arr[index-1].next = arr[index+1];
    return head;
  }
}