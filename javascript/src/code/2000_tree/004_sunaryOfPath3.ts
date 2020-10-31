import { BinaryTree, BinaryTreeType } from '../../definition';
// 路径之和
export const hasPathSum = (root: BinaryTree, sum: number): boolean => {
  if (!root) return false;
  const res: number[] = []
  const loop = (node: BinaryTreeType, sum: number) => {
    if (!root) return;
    console.log('val=',node!.val)
    if (!root.left && !root.right) {
      console.log('sum=',sum)
      res.push(sum)
    }
    node!.left && loop(node!.left, node!.val + sum)
    node!.right && loop(node!.right, node!.val + sum)
  }
  loop(root, 0);
  return false;
}