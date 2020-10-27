import {getMaxLevel} from '../../src/code/2000_tree/004_sunaryOfPath1'
import * as TreeUtils from '../../src/utils/tree'
import * as Case from './case';


// 执行测试：yarn run ts-node __tests__/tree/test_004_sumaryOfPath1.ts
(() => {
  const node1 = TreeUtils.TreeArray.array2BinaryTree(Case.case1);
  getMaxLevel(node1)
})()