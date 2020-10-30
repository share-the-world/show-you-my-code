import {BinaryTree, BinaryTreeType} from '../../definition';

/**
 * 求根到叶子节点数字之和-
 * 解题思路：递归-深度优先搜索(先序遍历)
 * @param root 
 */
export const sumNumbers = (root: BinaryTree): number => {
  if (!root) return 0;
  let res: number = 0;
  const loop = (node: BinaryTreeType, str: string) => {
    if (!node) return;
    if (!node.left && !node.right){// 叶子节点-没有左右子节点
      const num = parseInt(str + node.val);// 此路径表示的数
      res += num;// 求和
    }

    loop(node.left, str + node.val);
    loop(node.right, str + node.val);
  }
  loop(root,'');
  return res;
}