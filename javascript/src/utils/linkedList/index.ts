import {ListNode, ListNodeType} from '../../definition'

// 数组转换为链表
export const array2LinkedList = (arr: number[]): ListNode => {
  const link: ListNode = {val: 0, next: null}
  let index = 0;
  const loop = (node:ListNode | null,) => {
    if (!node) return;
    node.val = arr[index];
    node.next = {val: 0, next: null};
    if (index >= arr.length - 1) {
      node.next = null;
    }
    index ++;
    loop(node.next)
  }
  loop(link);
  return link
}
// 链表转为数组
export const linkedList2Array = (head: ListNodeType) => {
  const res: number[] = [];
  while(head) {
    res.push(head.val);
    head = head.next; // 指针+1
  }
  return res;
}


// 执行测试： yarn run ts-node src/utils/linkedList/index.ts
(() => {
  const arr1:number[] = [1,2,3,4]
  console.log('输入：',arr1)
  const link = array2LinkedList(arr1)
  console.log('链表',JSON.stringify(link))
  const res = linkedList2Array(link)
  console.log('数组:',res)
})