
export type BinaryTreeType = BinaryTree | null | undefined;
// 二叉树
export interface BinaryTree {
  val: number
  left?: BinaryTreeType
  right?: BinaryTreeType
}


