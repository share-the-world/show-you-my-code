import { count } from "console";

/**
 * 134. 加油站
 * https://leetcode-cn.com/problems/gas-station/
 * @param gas 
 * @param cost 
 */
export const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  return -1;
}


(() => {
  // console.log('输出=',canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
  // console.log('输出=',canCompleteCircuit([2,3,4], [3,4,3]))
  // console.log('输出=',canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))
const data:any = {
  name: 'zhangsan',
  age: 33,
  sex: 'man'
}
const getValue = (key = ''): string| number | undefined => {
  return (data || {})[key] || ''
}
const key = 'name'
console.log(`key=${key}, value=${getValue(key)}`)
})()
