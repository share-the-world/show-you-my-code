import {sumNumbers} from '../src/code/031'
import * as TreeUtils from '../src/utils/tree'
import * as Case from './tree/case'

// 执行测试：
(() => {
  const node = TreeUtils.TreeArray.array2BinaryTree(Case.case5)
  sumNumbers(node)
})()