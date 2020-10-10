import { ListNode } from '../../definition'

const case1:ListNode = {
  val: 3,
  next: {
    val:2,
    next: null
  }
}

// 循环链表
const getCycleNode = () => {
  const child:ListNode = {
    val:2,
    next:getCycleNode()
  }
  return child
}