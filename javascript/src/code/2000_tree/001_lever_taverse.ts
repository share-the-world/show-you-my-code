import {BinaryTree,BinaryTreeType} from '../../definition'
type ValType = number | null;

// 二叉树按层遍历
// 题目地址：require('../../../../item/binaryTree/01-level-traverse.md')
// 1.使用队列存当前层的所有节点
// 2.第一重循环遍历层，第二重循环遍历每层节点
const levelOrder =(root: BinaryTree): number[][] => {
  const queue: BinaryTree[] = [root];
  const res: number[][] = [];

  while(queue.length >= 0) {
    res.push([]);// 层
    const level:ValType[] = res[res.length-1];// 当前层
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      level.push(node!.val);

      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
  }
  return res
}

