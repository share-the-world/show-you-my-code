import {ListNode, ListNodeType} from '../../definition'
/**
 * 147. 对链表进行插入排序
 * https://leetcode-cn.com/problems/insertion-sort-list/
 * @param head 
 */
export const insertionSortList = (head: ListNode): ListNode => {
  if (!head || !head.next) return head;
  let root: ListNode = {val: -1, next: head};
  let i: ListNodeType = head;
  while(i) {
    let j: ListNodeType = root;
    let iNext: ListNodeType = i.next;
    let jNext: ListNodeType = j.next;
    while(j && iNext) {
      if (j.val > iNext.val) {}
    }
    i = iNext;
  }

  return root.next!;
}