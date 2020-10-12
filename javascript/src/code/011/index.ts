import {ListNode, ListNodeType} from '../../definition'

/**
 * 思路：
 * 使用set集合，如果add新元素之后没有使size增大，说明存在重复的元素
 * @param head 
 */
const detectCycle1 = (head?: ListNode):ListNodeType => {
  if (!head || !head.next) return null; // 至少两个才能形成链表
  let pointer: ListNodeType = head;
  let size = 0;
  const set = new Set<ListNode>();
  while (pointer) {
    set.add(pointer);
    if (set.size === size) { // 说明pointer就是环的开始
      return pointer.next;
    } else {
      size = set.size;
      pointer = pointer.next;
    }
  }
  return null;
}