import { nodeModuleNameResolver } from 'typescript';
import {BinaryTree, BinaryTreeType} from '../../definition'
import * as TreeUtils from '../../utils/tree'

type ValueType = (number | null);
// 路径总和
export const hasPathSum = (root: BinaryTree, sum: number): boolean => {
  const maxLevel = getMaxLevel(root);// 树最大深度
  const list: ValueType[][] = [];// 二维数组
  const queue: BinaryTreeType[] = [root]
  while(queue.length > 0) {
    list.push([]);
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();// 都不移除
      list[list.length-1].push(node ?  node.val : null);
      
      queue.push(node ? node.left : null);
      queue.push(node ? node.right : null);
    }
    if (list.length === maxLevel) break;// 结束循环
  }
  // 将二维数组转为一维
  const newList: ValueType[] = []
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      newList.push(list[i][j]);
    }
  }
  // 遍历二维数组的最后一层
  const lastLevels = list[list.length-1]
  for (let i = 0; i < lastLevels.length; i++) {
    if (lastLevels[i]) {
      
    }
  }
  return false;
}

// 获取二叉树最大深度
export const getMaxLevel = (root: BinaryTreeType): number => {
  if (!root) return 0;
  let max = 0;
  const loop = (node: BinaryTreeType, level: number) => {
    if (!node) return;
    max = Math.max(max, level);
    node.left && loop(node.left , level+1);
    node.right && loop(node.right, level+1);
  }
  loop(root, 0)
  // console.log('二叉树最大深度=',max+1)
  return max+1
}
