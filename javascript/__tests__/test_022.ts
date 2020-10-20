import {reorderList, toLinkedList} from '../src/code/022'



const case1 = [1,2,3,4,5,6,7,8,9,10,11];



(() => {
  const head = toLinkedList(case1);
  reorderList(head);
})()