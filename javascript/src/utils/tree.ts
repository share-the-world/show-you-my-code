import {BinaryTree,BinaryTreeType} from '../definition';

type ArrayType = (number | null | undefined)[];

// 二叉树转换为数组
export const binaryTree2Array = (node: BinaryTree) => {
  
}

/**
 * 数组转为二叉树
 * @param arr 
 */
export const array2BinaryTree = (arr: ArrayType): BinaryTree => {
  const list: BinaryTreeType[] = []
  if (arr.length <= 0) return {val: -1};
  const length = arr.length;
  list.length = length;// 定义好数组长度,元素全是null
  const halfLen = Math.floor(arr.length / 2);// 数组长度的一半，保留整数
  console.log('halfLen:',halfLen)
  for (let i = 0; i <= halfLen; i++) {
    if (isExist(arr[i])) { // 元素存在，说明不是空节点
      if (!list[i]) {// 如果是null，就要添加新节点
        list[i] = { val:Number(arr[i]), left: null, right: null };
      }
      let leftIndex = i*2+1;// 左子树位置
      let rightIndex = i*2+2;// 右子树位置
      console.log(`i=${i}, node=${JSON.stringify(list[i])}, length=${list.length}`)
      if (isExist(arr[leftIndex])) {
        (list[i]!.left = { val: Number(arr[leftIndex]) });// 奇数为左
        list[leftIndex] = list[i]!.left;// leftIndex位置上赋值左节点
      }
      if (isExist(arr[rightIndex])) {
        list[i]!.right = { val: Number(arr[rightIndex]) };// 偶数在右
        list[rightIndex] = list[i]!.right;// leftIndex位置上赋值右节点
      }

      console.log(`leftIndex左 = ${leftIndex},${arr[leftIndex]}`)
      console.log(`rightIndex右 = ${rightIndex},${arr[rightIndex]}`)
      console.log(`i=${i}, node=${JSON.stringify(list[i])}, length=${list.length}`)
      console.log('_____________________________________')
    }
  }
  console.log('二叉树：',JSON.stringify(list[0]))
  return list[halfLen]!;// 头结点
}
// 存在并且为数字类型
const isExist = (s: any): boolean => {
  return s && typeof s === 'number';
}

const print = () => {}

const case1 = [50, 25,75,null, 37, 62, 84, null, null,31,43,55,null,92];


// 执行测试： 
(() => {
  array2BinaryTree(case1);
})()