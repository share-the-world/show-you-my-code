// 测试二叉树
import {array2BinaryTree, binaryTree2Array, getLevel} from '../src/utils/tree'

const case1 = [1,2,3,null,4,null,5, null,null ,null,null, null,null, 6,null];
const case2 = [50, 25,75,null, 37, 62, 84, null, null,31,43,55,null,92];

// 测试：获取二叉树层数
const testLevel = () => {
  const node = array2BinaryTree(case1)
  const level = getLevel(node);
  console.log('level: ',level)
}

// 测试：二叉树转换为数组
const testToArray = () => {
  const node = array2BinaryTree(case1)
  binaryTree2Array(node)
}

// 执行测试:
(() => {
  testToArray()
})()
