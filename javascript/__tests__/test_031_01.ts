import {sumNumbers} from '../src/code/031/solution1'
import * as TreeUtils from '../src/utils/tree'
import * as Case from './tree/case'

// 执行测试：yarn run ts-node __tests__/test_031_01.ts
(() => {
  const node = TreeUtils.TreeArray.array2BinaryTree(Case.case6)
  sumNumbers(node)
})()