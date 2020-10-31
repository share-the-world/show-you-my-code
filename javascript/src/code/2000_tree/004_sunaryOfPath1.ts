import { BinaryTree, BinaryTreeType } from '../../definition'

type ValueType = (number | null);
/**
 * 路径总和
 * 此方案有漏洞，不正确
 * 思路：
 * 1.将二叉树转为数组
 * 2.遍历二叉树最后一层，从底部向上遍历，例如底部节点L[i],其父节点为L[(i-1)/2]
 * 此方案需要额外判断是否为叶子节点
 * @param root 
 * @param sum 
 */
export const hasPathSum = (root: BinaryTree, sum: number): boolean => {
  if (!root) return false
  const maxLevel = getMaxLevel(root);// 树最大深度
  const list: ValueType[][] = [];// 二维数组
  const queue: BinaryTreeType[] = [root]
  while (queue.length > 0) {
    list.push([]);
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();// 都不移除
      list[list.length - 1].push(node ? node.val : null);

      queue.push(node ? node.left : null);
      queue.push(node ? node.right : null);
    }
    if (list.length === maxLevel) break;// 结束循环
  }
  console.log('list:', list)
  // 将二维数组转为一维
  const newList: ValueType[] = []
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      newList.push(list[i][j]);
    }
  }
  console.log('newList:', newList)
  // 遍历二叉树最后一层
  const start = Math.pow(2, maxLevel - 1) - 1
  for (let i = start; i < newList.length; i++) {
    let num: number = toNumber(newList[i]);
    let j: number = i;
    const paths: (number | null)[] = [i]
    const nums: (number | null)[] = [num]
    while (j > 0) {
      j = Math.floor((j - 1) / 2);
      // console.log(`j=${j}, val=${newList[j]}`)
      num += toNumber(newList[j]);
      paths.push(j)
      nums.push(newList[j])
    }
    
    console.log(`sum=${sum}, path=${paths}, nums=${nums}`)
    if (sum === num && hasLeaf(paths)) {
      console.log('找到:',nums)
      return true;
    }
  }
  return false;
}

// 判断最后一个非空节点是否为叶子节点
const hasLeaf = (arr:ValueType[]): boolean => {
  for (let index = arr.length-1; index >=0; index--) {
    if (arr[index]) {
      console.log(`index=${index}, val=${arr[index]}`)
      return !(arr[2*index+1] || arr[2*index+2]);// 判断左右俩孩子是否为空
    }
  }
  return false;
}
// 转为数字，空转为0
const toNumber = (i: number | null | undefined): number => {
  return i ? i : 0;
} 

// 获取二叉树最大深度
export const getMaxLevel = (root: BinaryTreeType): number => {
  if (!root) return 0;
  let max = 0;
  const loop = (node: BinaryTreeType, level: number) => {
    if (!node) return;
    max = Math.max(max, level);
    node.left && loop(node.left, level + 1);
    node.right && loop(node.right, level + 1);
  }
  loop(root, 0)
  // console.log('二叉树最大深度=',max+1)
  return max + 1
}
