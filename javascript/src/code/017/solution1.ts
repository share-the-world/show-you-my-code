import {BinaryTree} from './index'

/**
 * 此解法无法通过leeCode，原因是使用了额外的内存。
 * 思路：1.创建一个二维数组，第一维存层，第二维存节点
 * 2.双重for循环指定next
 * 解题思路
 * @param root 
 */
export const connect = (root: BinaryTree) => {
  const list = mapForLevel(root);
  for (let i = 0; i < list.length; i++) {
    const levels = list[i]
    for (let j = 0; j < levels.length; j++) {
      if (j === levels.length -1) {
        levels[j].next = null;
      } else {
        levels[j].next = levels[j+1]
      }
      
    }
  }
  console.log('res:',JSON.stringify(root))
}

// 层级遍历，返回二维数组
const mapForLevel = (head: BinaryTree):BinaryTree[][] => {
  const list: BinaryTree[][] = [];
  let level = 0;
  const loop = (node: BinaryTree, level = 0) => {
    if (list.length === level) {
      list.push([])
    }
    list[level].push(node);

    node.left &&loop(node.left, level+1);
    node.right &&loop(node.right, level+1);
  }
  loop(head,level);
  console.log(list)
  return list
}