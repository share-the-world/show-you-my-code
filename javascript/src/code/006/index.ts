
//链表
interface ListNode {
  val: number;
  next?: ListNode
}
type ParamType = ListNode | undefined
const l1: ListNode = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
    }
  }
}

const l2: ListNode = {
  val: 5,
  next: {
    val: 6,
    next: { val: 4 }
  }
}
// 解答
export const addTwoNumbers = (l1: ListNode , l2: ListNode): ListNode => {
  let quotient = 0; //  商（1或0）
  const loop = (n1: ParamType, n2: ParamType, res: ParamType) => {
    if (!n1 && !n2) return res;
    // 如果长度不同，则短的补0
    const sum = (n1?.val || 0) + (n2?.val || 0) + quotient
    const cur = sum % 10; // 余数
    quotient = parseInt(String(sum / 10));// 商
    res = {
      val: cur,
      next: quotient === 1 ? {val: 1} : undefined
    }
    res.next = loop(n1?.next,n2?.next,res.next)
    return res;
  }
  return loop(l1,l2, {val: 0})!;
}



const res = addTwoNumbers(l1,l2)
console.log('res:',res)