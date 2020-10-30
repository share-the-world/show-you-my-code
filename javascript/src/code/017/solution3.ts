import {BinaryTree as BT} from '../../definition'
// 带有next的二叉树
interface BinaryTree extends BT {
  next?: BinaryTree | null
}

//填充每个节点的下一个右侧节点指针
export const connect = (root: BinaryTree): void => {
  const queue: BinaryTree[] = [root];
  while(queue.length > 0) {
    const size = queue.length;
    for(let i = 0; i < size; i ++){
      const node = queue.shift()!;
      if (queue.length > 0) {
        node.next = queue[0];
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  console.log(JSON.stringify(root))
}