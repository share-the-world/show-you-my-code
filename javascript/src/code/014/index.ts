import { BinaryTreeType } from './../../definition/BinaryTree';
import { BinaryTree } from '../../definition'
import {getTreeCase1,treeNodeCase2, treeNodeCase3} from './TestCase'

const getMinimumDifference = (root: BinaryTree) => {
  const arr: number[] = []
  toArray1(root,arr);
  console.log('arr1:',arr)
}
const toArray = (node?: BinaryTree | null): number[] =>  {
  if (!node) return []
  const nums: number[] = [node.val];
  let left = node?.left;
  let right = node?.right;
  while(left || right){
    left && nums.push(left!.val);
    right && nums.push(right!.val);
    left = left?.left;
    right = right?.right;
  }
  return nums;
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

getMinimumDifference(treeNodeCase2)
getMinimumDifference(treeNodeCase3)


