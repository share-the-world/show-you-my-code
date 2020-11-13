import {ListNode, ListNodeType} from '../../definition'

/**
 * 次解法不对啊，放弃吧
 * @param head 
 */
export const oddEvenList = (head: ListNode): ListNode => {
  if (!head || !head.next || !head.next.next) return head;// 最少需要三个节点
  let odd: ListNodeType = head;// 奇数
  let even: ListNodeType = head.next;// 偶数
  const second = head.next;
  while(odd.next && even.next) {
    if (even && even.next) {
      odd.next = even.next
      odd = odd.next;
      console.log('odd=',odd.val)
    }
    if (odd && odd.next) {
      even.next = odd.next
      even = even.next
      console.log('even=',even.val)
    }
  }
  console.log(JSON.stringify(head))
  console.log(JSON.stringify(second))
  return head
}