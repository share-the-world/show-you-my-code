
export interface TreeNode {
  val: number
  left?: TreeNode
  right?: TreeNode
}

// 测试数据
export const treeNode: TreeNode = {
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


