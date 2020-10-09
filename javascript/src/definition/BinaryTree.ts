
// 二叉树
export interface BinaryTree {
  val: number
  left?: BinaryTree
  right?: BinaryTree
}

// 测试数据
export const treeNode: BinaryTree = {
  val:12,
  left: {
    val:1,
    left:{ val: 2},
    right: { val: 3}
  },
  right: {
    val:7,
    left: { val: 4},
    right: { val: 5}
  }
}


