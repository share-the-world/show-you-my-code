import {BinaryTree, BinaryTreeType} from '../../definition'

// 二叉树遍历：前（中后）序遍历，层次遍历

/**
 * 获取二叉树的层级
 * @param root  二叉树
 */
export const getLevel = (root: BinaryTree): number => {
  let res = 0;
  const list:number[][] = [];// 二维数组,第一维是层级，第二维是每层元素
  const loop = (node: BinaryTree, level: number) => {
    res = level;
    if (list.length === level) {
      list.push([]);
    }
    list[level].push(node.val);
    if(node.left) {
      loop(node.left, level+1)
    }
    if (node.right) {
      loop(node.right, level+1)
    }
  }
  loop(root,res)
  console.log('list:',JSON.stringify(list))
  return res + 1;// 层级从1开始
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