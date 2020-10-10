import { BinaryTree } from '../src/definition/BinaryTree'
import { insertIntoBST } from '../src/code/002'
const data1: BinaryTree = {
  val:4,
  left: {
    val:2,
    left: {val:1},
    right: {val: 3}
  },
  right: { val: 7 }
}

const result = insertIntoBST(data1, 5);

console.log('result:',result)

