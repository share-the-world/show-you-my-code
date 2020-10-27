import {BinaryTree,BinaryTreeType} from '../../definition'

/**
 * 是否为对称二叉树
 * 此方法无效，无法解题，此法只能针对完美二叉树
 * 解法2:中序遍历，判断是否为回文串
 * @param root 
 */
export const isSymmetric = (root: BinaryTree): boolean => {
  if (!root) return false;
  const arr: number[] = []
  const loop = (node: BinaryTreeType) => {
    if (!node) return;
    loop(node.left);
    arr.push(node.val);
    loop(node.right);
  }
  loop(root);
  let left = 0, right = arr.length - 1;
  while(left < right) {
    if (arr[left] !== arr[right]) {
      return false
    }
    left ++;
    right --;
  }
  return true;
}