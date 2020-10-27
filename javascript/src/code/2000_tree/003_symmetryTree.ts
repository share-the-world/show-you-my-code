import {BinaryTree, BinaryTreeType} from '../../definition'
import * as TreeUtils from '../../utils/tree'

// 是否为对称二叉树
export const isSymmetric = (root: BinaryTree): boolean => {
  return false;
}
/**
 * 层级遍历,返回二位数组
 * @param root 
 */
export const getLevels = (root: BinaryTree): (number | null) [][] => {
  const res: (number | null) [][] = [];
  const deepLevel = TreeUtils.Traverse.getLevel(root);
  const loop = (node: BinaryTreeType, level: number) => {
    if(level === deepLevel) {// 达到最大层级
      return;
    }
    if (res.length === level) {
      res.push([]);
    }
    console.log(`level=${level},res=`,res)
    const arr = res[level];
    arr.push(node ? node.val : null);
    loop(node? node.left : null, level+1);
    loop(node? node.right : null, level+1);
  }
  loop(root, 0);
  console.log('res',res)
  return res;
}