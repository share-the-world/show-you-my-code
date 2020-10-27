import {BinaryTree, BinaryTreeType} from '../../definition'
import * as TreeUtils from '../../utils/tree'

/**
 * 是否为对称二叉树
 * 此方案复杂度过高，不建议采用
 * 思路：判断每层元素是否对称
 * 1.按层遍历，没有节点用null表示,获得二维数组
 * 2.内层数组表示层内元素，判断数组是否对称
 * @param root 
 */
export const isSymmetric = (root: BinaryTree): boolean => {
  const list = getLevels(root);
  for (let index = 0; index < list.length; index++) {
    const length = Math.pow(2, index);// 每层个数，2的N次方
    console.log(`length=${length}`)
    let left = 0, right = length - 1;
    while(left < right) {
      console.log(`index=${index}, left=${left}: ${list[index][left]}, right=${right}: ${list[index][right]},`)
      if (list[index][left] !== list[index][right]) {
        return false;
      }
      left ++;
      right --;
    }
  }
  console.log('是否为对称二叉树:',true)
  return true;
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
    // console.log(`level=${level},res=`,res)
    const arr = res[level];
    arr.push(node ? node.val : null);
    loop(node? node.left : null, level+1);
    loop(node? node.right : null, level+1);
  }
  loop(root, 0);
  // console.log('res',res)
  return res;
}

