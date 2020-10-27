import {isSymmetric} from '../../src/code/2000_tree/003_symmetryTree'
import {Traverse, TreeArray} from '../../src/utils/tree'
import * as Case from './case';





// 测试对称树: yarn run ts-node __tests__/tree/test_003_symmetryTree.ts
(() => {
  const node1 = TreeArray.array2BinaryTree(Case.case3);
  isSymmetric(node1)
})()