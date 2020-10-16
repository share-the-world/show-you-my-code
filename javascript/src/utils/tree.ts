import {BinaryTree,BinaryTreeType} from '../definition';

type ArrayType = (number | null | undefined)[];

// 二叉树转换为
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
      console.log(`i=${i}, node=${JSON.stringify(list[i])}, length=${list.length}`)
      
      isExist(arr[i*2+1]) && (list[i]!.left = { val: Number(arr[i*2+1]) });// 奇数为左，存在就添加
      isExist(arr[i*2+2]) && (list[i]!.right = { val: Number(arr[i*2+2]) });// 偶数在右

      console.log(`i*2+1左 = ${i*2+1},${arr[i*2+1]}`)
      console.log(`i*2+2右 = ${i*2+2},${arr[i*2+2]}`)
      console.log(`i=${i}, node=${JSON.stringify(list[i])}, length=${list.length}`)
      console.log('_____________________________________')
    }
  }
  console.log('二叉树：',list[0])
  return list[halfLen]!;// 头结点
}
// 存在并且为数字类型
const isExist = (s: any): boolean => {
  return s && typeof s === 'number';
}

const print = () => {}

const case1 = [50, 25,75,null, 37, 62, 84, null, null,31,43,55,null,null];


// 执行测试： 
(() => {
  array2BinaryTree(case1);
})()