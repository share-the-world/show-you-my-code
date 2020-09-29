import { treeNode } from '../../utils/BinaryTree'

/**
 * 后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
export const postorderTraversal = (root) => {
  const arr = [];
  const loop = (node) => {
    if (!node) return;
    node && loop(node.left);
    node && loop(node.right)
    node.val && arr.push(node.val)
  }
  loop(root)
  console.log('arr:',arr)
  return arr;
};
export const test = () => {
  postorderTraversal(treeNode)
}


