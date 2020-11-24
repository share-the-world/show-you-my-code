
/**
 * 134. 加油站
 * https://leetcode-cn.com/problems/gas-station/
 * @param gas 
 * @param cost 
 */
export const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  let start = 0, pointer = 0, head = 0;
  let surplus = gas[0]
  do {
    const next = pointer === gas.length - 1 ? 0 : pointer + 1;
    surplus = surplus - cost[pointer] + gas[next];
    if (surplus > 0) {
      pointer = next;
      if (pointer === start) return start;
    } else {
      start ++;
      pointer = start;
      surplus = gas[start];
    }
    if (start === pointer && pointer === head) return -1
  } while (true);
}


(() => {
  // console.log('输出=',canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
  // console.log('输出=',canCompleteCircuit([2,3,4], [3,4,3]))
  console.log('输出=',canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))

})()
