import {validMountainArray} from '../src/code/036'


const case1 = [1,2,3,4];
const case2 = [3,2,1,0];
const case3 = [1,2,3,2,1];
const case4 = [1,2,3,3,1];
const case5 = [1,3,3,2,1];


(() => {
  console.log('case1=',validMountainArray(case1))
  console.log('case2=',validMountainArray(case2))
  console.log('case3=',validMountainArray(case3))
  console.log('case4=',validMountainArray(case4))
  console.log('case5=',validMountainArray(case5))
})()