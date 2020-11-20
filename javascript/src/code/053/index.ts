import {ListNode, ListNodeType} from '../../definition'
/**
 * 147. 对链表进行插入排序
 * https://leetcode-cn.com/problems/insertion-sort-list/
 * @param head 
 */
export const insertionSortList = (head: ListNode): ListNode => {
  if (!head || !head.next) return head;
  let root = head;
  let i = head, j = i.next;
  while(j) {
    if (i.val > j.val) {
      
    } else {

    }
    j = j.next;
  }
  return {val: 0, next: null}
}