import {preorderTraversal} from '../src/code/029'
import * as TreeUtils from '../src/utils/tree'
import * as Case from './tree/case'

// 执行测试：
(() => {
  const node = TreeUtils.TreeArray.array2BinaryTree(Case.case2)
  preorderTraversal(node)
})()