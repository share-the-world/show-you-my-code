import {isLongPressedName,doShift} from '../src/code/023'

interface Case{
  name: string,
  typed: string
}

const case1: Case = { name:"alex", typed:"aaleex" };
const case2: Case = { name:"saeed", typed:"ssaaedd" };
const case3: Case = { name:"pyplrz", typed:"ppyypllr" };
const case4: Case = { name:"alex", typed:"alexxr" };
const case5: Case = { name:"alex", typed:"aaleex" };

// 执行测试
(() => {
  // console.log('结果：',isLongPressedName(case1.name, case1.typed))
  // console.log('结果：',isLongPressedName(case2.name, case2.typed))
  // console.log('结果：',isLongPressedName(case3.name, case3.typed))
  // console.log('结果：',isLongPressedName(case4.name, case4.typed))
  console.log('结果：',isLongPressedName(case5.name, case5.typed))
  // doShift('a', case1.typed.split(''))
})()