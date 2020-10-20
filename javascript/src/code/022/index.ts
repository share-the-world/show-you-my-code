import {ListNode,ListNodeType} from '../../definition'
//  重排链表
export const reorderList =(head: ListNode):void => {
  const arr = saveInArray(head);
  const length = arr.length;
  if (arr.length <= 2) return;
  const n = length - 1;
  let i = 1;
  while (i < n - i + 1) {
    const pre1 = arr[i-1];// Li前面的节点
    const node1 = arr[i];// Li节点
    const pre2 = arr[n-i];// L(n-i+1)前面的节点
    const node2 = arr[n-i+1]; //L(n-i+1)节点

    pre1.next = node2;
    node2.next = node1;
    pre2.next = null;// 避免尾部形成环
    
    i ++;
  }
  console.log('输出结果：', toArray(head))
}

/**
 * 将链表各个节点存入数组中
 * @param head 
 */
const saveInArray = (head: ListNode): ListNode[] => {
  let arr:ListNode[] = [];
  const loop =(node: ListNodeType) => {
    if(!node) return;
    arr.push(node);
    loop(node.next);
  }
  loop(head);
  console.log('arr:',arr)
  return arr;
}

// 链表转换为数组
const toArray = (head: ListNode): number[] => {
  const arr: number[] = [];
  const loop =(node: ListNodeType) => {
    if (!node) return;
    arr.push(node.val);
    loop(node.next);
  }
  loop(head);
  return arr
}

// 数组转为二叉树
export const toLinkedList = (arr: number[]): ListNode => {
  if (arr.length === 0) throw new Error('数组不能为空');
  const head: ListNode = {val:0, next:null};
  let i = 0;
  let node = head;
  while(i < arr.length) {
    node.next = {val:arr[i], next: null};
    node = node.next;
    i ++;
  }
  console.log('数组转二叉树：',JSON.stringify(head.next));
  return head.next!;
}
