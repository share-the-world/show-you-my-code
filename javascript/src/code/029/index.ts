import {BinaryTree, BinaryTreeType} from '../../definition'

/**
 * 二叉树前序遍历-迭代法
 * 思路：
 * 维护一个栈结构，
 * 1.将所有left节点入栈
 * 2.逐个出栈检查是否有right节点
 * 3.返回步骤1，直至栈为空时结束循环
 * @param root 
 */
export const preorderTraversal = (root: BinaryTree): number[] => {
  const res: number[] = []
  const stack: BinaryTree[] = [root];// 维护一个栈结构
  let node: BinaryTreeType= root;
  while (stack.length > 0) {
    while (node) {
      res.push(node.val);
      stack.unshift(node);// 头部添加
      node = node.left;
    }
    const child = stack.shift();// 从栈内取出一个节点
    if (child!.right) {
      node = child!.right;
    }
  }
  console.log('前序遍历结果：',res)
  return res;
}