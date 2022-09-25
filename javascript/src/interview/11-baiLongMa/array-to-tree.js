/* eslint-disable @typescript-eslint/no-unused-expressions */

const arr = [
  { pNode: null, value: 1 },
  { pNode: 1, value: 2 },
  { pNode: 1, value: 3 },
  { pNode: 2, value: 4 },
];

/**
 *
 * @param {number} value
 * @param {Tree} left
 * @param {Tree} right
 */
function Tree(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

/**
 *
 * @param {Array<{pNode: number; value: number}>} arr
 */
function toTtree(arr) {
  arr.sort((a, b) => {
    return a.pNode || 0 - b.pNode;
  });
  const node = arr.shift();
  const recursive = (tree, node) => {
    if (!tree || !node) return;
    if (tree.value === node.pNode) {
      !tree.left ? (tree.left = node) : !tree.right && (tree.right = node);
    } else {
      recursive(tree.left, node);
      recursive(tree.right, node);
    }
  };
  while (arr.length) {
    recursive(node, arr.shift());
  }

  return node;
}

console.log(toTtree(arr));
