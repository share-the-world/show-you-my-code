import { type } from "os";

//链表
interface ListNode {
  val: number;
  next?: ListNode
}

const l1: ListNode = {
  val: 2,
  next: {
    val: 4,
    next: {val: 3}
  }
}

const l2: ListNode = {
  val: 5,
  next: {
    val: 6,
    next: { val: 4 }
  }
}
// 1.将链表转化为数组
// 2.数组对应位数上的数字相加
// 3.大于10的数，减去10，并且
export const addTwoNumbers1 = (l1: ListNode, L2: ListNode): any => {
  const toArray = (node: ListNode | undefined, arr: number[]): number[] => {
    if (node) {
      toArray(node.next, arr);
      arr.push(node.val)
    }
    return arr;
  }
  const arr1 = toArray(l1,[]);
  const arr2 = toArray(l2,[]);
  // 较小的数组，前面补0
  const tempArr = arr1.length >= arr2.length ? arr2 : arr1;
  for (let index = 0; index < Math.abs(arr1.length - arr2.length); index++) {
    tempArr.unshift(0)
  }
  const resArr = arr1.map((item, index) => {
    return item + arr2[index]
  });
  resArr.unshift(0);// 头部补0
  resArr.map((item ,index) => {
    if (item >= 10) {
      
    }
  })

}
type ParamType = ListNode | undefined
export const addTwoNumbers = (l1: ListNode , L2: ListNode): ListNode => {
  let divisor = 0; //  除数（1或1）
  const loop = (n1: ParamType, n2: ParamType, res: ParamType) => {
    if (!n1 || !n2) return res;
    const sum = n1.val + n2.val + divisor
    const cur = sum % 10; // 余数
    divisor = sum / 10;// 整除
    res = {
      val: cur,
      next: divisor === 1 ? {val: 1} : undefined
    }
    loop(n1.next,n2.next,res.next)
    return res;
  }
  return loop(l1,l2, {val: 0})!;
}
const res = addTwoNumbers(l1,l2)
console.log('res:',res)