import {oddEvenList} from '../src/code/046';
import {array2LinkedList, linkedList2Array} from '../src/utils/linkedList'

const case1 = [1,2,3,4,5];
const case2 = [2,1,3,5,6,4,7];

(() => {
  console.log('输入=',case1);
  console.log('输出=', linkedList2Array(oddEvenList(array2LinkedList(case1))))
})()