import { BinaryTree, BinaryTreeType } from '../../definition'
import {getTreeCase1,treeNodeCase2, treeNodeCase3} from './TestCase'
import { bubbleSort } from '../../utils/sort/BubbleSort';

//  二叉搜索树的最小绝对差
const getMinimumDifference = (root: BinaryTree): number => {
  const arr: number[] = [];
  const loop = (node: BinaryTreeType, nums: number[]) => {
    if (!node) return;
    nums.push(node.val)
    loop(node.left, nums);
    loop(node.right, nums);
  }
  loop(root, arr)
  bubbleSort(arr)
  const newArr = reduceNum(arr)
  bubbleSort(newArr)
  console.log('减法的数组：',newArr)
  return newArr[0];
}
// 相邻的两个数，两两相见，差村委新数组
const reduceNum = (arr: number[]): number[] => {
  const res: number[] = []
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(arr[i+1] - arr[i])
  }
  return res;
}

// 递归遍历-先序-根左右
const toArray1 = (node: BinaryTreeType, nums: number[]): void =>  {
  if (!node) return;
  nums.push(node.val);
  toArray1(node.left,nums);
  toArray1(node.right, nums);
}
// 递归遍历-中序-左根右
const toArray2 = (node: BinaryTreeType, nums: number[]): void =>  {
  if (!node) return;
  
  toArray1(node.left,nums);
  nums.push(node.val);
  toArray1(node.right, nums);
}

// 执行测试: yarn run ts-node src/code/014/index.ts
(() => {
  const res = getMinimumDifference(treeNodeCase2)
})()



