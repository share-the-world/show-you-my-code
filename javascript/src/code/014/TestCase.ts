import {BinaryTree} from '../../definition'

// 二叉树测试用例
export const getTreeCase1 = (): BinaryTree => {
  return {
    val: 1,
    left: null,
    right: {
      val: 3,
      left: { val: 2},
      right: null
    }
  }
}
// 测试数据
export const treeNodeCase2: BinaryTree = {
  val:12,
  left: {
    val:6,
    left:{ val: 2},
    right: { val: 7}
  },
  right: {
    val:13,
    left: { val: 12},
    right: { val: 15}
  }
}
// 测试数据
export const treeNodeCase3: BinaryTree = {
  val:12,
  left: {
    val:1,
    left:{ 
      val: 2, 
      left: { val: 11}
    },
    right: { val: 3}
  },
  right: {
    val:7,
    left: { 
      val: 4,
      left: null,
      right: { val: 15 }
    },
    right: { val: 5}
  }
}