import {ListNode, ListNodeType} from '../../definition'
/**
 * 147. 对链表进行插入排序
 * https://leetcode-cn.com/problems/insertion-sort-list/
 * @param head 
 */
export const insertionSortList = (head: ListNode): ListNodeType => {
  if (!head) return null;
  console.log('head=',JSON.stringify(head))
  if (!head || !head.next) return head;
  const arr: ListNode[] = []
  // 链表存入数组中
  const loop = (node: ListNodeType) => {
    if (!node) return;
    arr.push(node);
    loop(node.next);
  }
  loop(head);
  // 插入排序
  for(let i = 0; i < arr.length; i ++){
    for(let j = i; j > 0; j --) {
      if (arr[j].val - arr[j-1].val < 0) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else {
        break;
      }
    }
  }
  // 数组转链表
  for(let i = 0; i < arr.length; i ++) {
    // console.log(`i=${i}, val=${arr[i].val}`)
    if (i === arr.length - 1) {
      arr[i].next = null;
      break;
    }
    arr[i].next = arr[i+1];
  }
  return arr[0];
}

