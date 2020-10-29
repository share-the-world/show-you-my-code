import {BinaryTree, BinaryTreeType} from '../../definition';

/**
 * 求根到叶子节点数字之和
 * 
 * 解题思路：广度优先搜索。
 * 维护两个队列，一个用来存节点，另一个用来存每条路径
 * @param root 
 */
export const sumNumbers = (root: BinaryTree): number => {
  if (!root) return 0;
  const nQ: BinaryTree[] = [root]; // 队列，存节点
  const vQ: string[] = [String(root.val)];// 队列，存节点拼接的数组
  const arr: string[] = [];// 数字集合，每条路径表示一个数字
  while (nQ.length > 0) {
    const node = nQ.shift()!;
    const str = vQ.shift()!;
    // 左右节点都不存在，说明是叶子节点，跳出本次循环，执行下一次
    if(!node.left && !node.right) {
      arr.push(str)
      continue;
    }
    if (node.left) {
      nQ.push(node.left)
      vQ.push(str + node.left.val);
    }
    if (node.right) {
      nQ.push(node.right)
      vQ.push(str + node.right.val);
    }
  }
  // 求和
  let res: number = 0
  for (let val of arr) {
    res += Number(val);
  }
  // console.log(`arr=${arr}, res=${res}`)
  return res;
}