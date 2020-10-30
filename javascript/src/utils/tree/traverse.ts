import {BinaryTree, BinaryTreeType} from '../../definition'

// 二叉树遍历：前（中后）序遍历，层次遍历

/**
 * 获取二叉树的层级
 * @param root  二叉树
 */
export const getLevel = (root: BinaryTreeType): number => {
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

// 层级遍历，返回二维数组
export const mapForLevel = (head: BinaryTree):number[][] => {
  const list: number[][] = [];
  let level = 0;
  const loop = (node: BinaryTree, level = 0) => {
    if (list.length === level) {
      list.push([])
    }
    list[level].push(node.val);

    node.left &&loop(node.left, level+1);
    node.right &&loop(node.right, level+1);
  }
  loop(head,level);
  console.log(list)
  return list
}

/**
 * 层级遍历,返回二位数组.把二叉树当做完美而查出进行遍历
 * @param root 
 */
export const mapForLevelWithPerfectBT = (root: BinaryTree): (number | null) [][] => {
  const res: (number | null) [][] = [];
  const deepLevel = getLevel(root);
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