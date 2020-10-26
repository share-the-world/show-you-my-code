import {getLevels} from '../../src/code/2000_tree/003_symmetryTree'
import {Traverse, TreeArray} from '../../src/utils/tree'
import * as Case from './case';





// 测试对称树
(() => {
  const node1 = TreeArray.array2BinaryTree(Case.case3);
  getLevels(node1)
})()