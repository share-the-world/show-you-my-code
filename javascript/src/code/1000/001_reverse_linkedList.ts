import {ListNode,ListNodeType} from '../../definition'


// 翻转列表，题目地址：'../../../../item/linkedList/01-reverse.md'

const reverseList =() => {

}
// 方法一：递归
// 时间复杂度O(n),空间复杂度O(1)
const solution1 = (head: ListNode): ListNode => {
  let last:ListNode;
  const loop = (node: ListNode) => {
    if (!node) return;
    if (!node.next) { // 最后一个节点
      last = node;
      return
    }
    loop(node.next)
    node.next.next = node;
    
  }
  loop(head);
  head.next = null;
  return last!;
}

// 方法2：while循环迭代,
// 时间复杂度O(2n),空间复杂度O(n)
const solution2 = (head: ListNode): ListNode => {
  let node = head;
  const arr: ListNode[] = []
  while(node) {
    arr.push(node)
    node = node.next!;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[0].next = null;
    }else {
      arr[i].next = arr[i-1];
    }
  }
  console.log('翻转链表：',JSON.stringify(arr[arr.length-1]))
  return arr[arr.length-1];
}
// 方法3：双指针优化方法2
const solution3 = (head: ListNode): ListNode => {
  let cur: ListNodeType = head;
  let pre: ListNodeType = null;
  while(cur) {
    const temp: ListNodeType = cur.next;
    cur.next = pre
    pre = cur;
    cur = temp;
  }
  console.log('pre:',JSON.stringify(pre))
  return pre!;
}

// 数组转成链表
const array2LinkedList = (arr: number[]): ListNodeType => {
  if (!arr || arr.length <= 0) return null;
  let i = 0;
  let head: ListNodeType = {val:0, next: null}
  const root = head;
  while(i < arr.length) {
    head!.val = arr[i];
    if (i === arr.length - 1) {
      head!.next = null;
    } else {
      head!.next = {val: 0, next: null}
    }
    head = head!.next;
    i ++;
  }
  return root
}

// 链表转数组
const linkedList2Array = (head: ListNode): number[] => {
  if (!head) return [];
  const arr: number[] = [];
  const loop = (node: ListNodeType) => {
    if (!node) return;
    arr.push(node.val);
    loop(node.next);
  }
  return []
}


// 测试用例
const case1 = [1,2,3,4,5];

// 执行测试：yarn run ts-node src/code/1000/001_reverse_linkedList.ts
(() => {
  const node = array2LinkedList(case1)
  console.log('链表：',JSON.stringify(node))
  solution3(node!)
})()