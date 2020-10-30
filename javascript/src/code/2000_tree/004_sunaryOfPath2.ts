import { BinaryTree, BinaryTreeType } from '../../definition';
// 路径之和
export const hasPathSum = (root: BinaryTree, sum: number): boolean => {
  if (!root) return false;
  const queue: BinaryTree[] = [root];
  const sum_q: number[] = [0]
  while(queue.length>0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      const result = sum_q.shift()!;

      sum_q.push(node.val + result);
      node.left && queue.push(node.left)
    }
  }
  return false;
}