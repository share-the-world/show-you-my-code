import {insertionSortList} from '../src/code/053'
import {insertionSortList as solution1} from '../src/code/053/solution1'
import {array2LinkedList, linkedList2Array} from '../src/utils/linkedList'

const case1: number[] = [6,5,3,1,8,7,2,4];
const case2: number[] = [];
// yarn run ts-node __tests__/test_053.ts
(() => {
  console.log('输出=',JSON.stringify(solution1(array2LinkedList(case2))))
})()
