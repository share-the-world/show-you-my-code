import {BinaryTree} from '../../definition'


/**
 * 二叉树前序遍历
 * 思路：迭代（维护一个栈）
 */
const  preorderTraversal = (root: BinaryTree): number[] => {
  if (!root) return [];
  const res: number[] = [];
  const stack: BinaryTree[] = [root];
  let node = root;
  while(stack.length > 0){
    const head = node
    res.push(head.val);
    const size = stack.length;
    for (let i = 0; i < size; i ++) {
      if (head.left) {
        stack.unshift(head.left);
      }else {
        node = stack.shift()!
      }
    }

  }
  return res;
}