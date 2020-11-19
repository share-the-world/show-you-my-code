import { count } from "console";

/**
 * 134. 加油站
 * https://leetcode-cn.com/problems/gas-station/
 * @param gas 
 * @param cost 
 */
export const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  const head: LinkList = {gas:0, cost:0,index:-1, next: null}; // 链表
  let temp: LinkList | null = head;
  for(let i = 0; i < gas.length; i ++) {
    temp.gas = gas[i];
    temp.cost = cost[i];
    temp.index = i;
    if (i === gas.length -1) {
      temp.next = head;
    } else {
      temp.next = {gas:0, cost:0, index:-1, next: null}
      temp = temp.next;
    }
  }
  // console.log(head)
  let p = head;
  let start = head;
  let surplus = head.gas;
  do {
    console.log(`surplus=${surplus},cost=${p.cost},next.gas=${p.next!.gas}`)
    surplus = (surplus - p.cost + p.next!.gas);// 省油油量，从当前加油站走到下一个加油站
    console.log(`p-index=${p.index}, start-index=${start.index},surplus=${surplus}`)
    if (surplus > 0) {
      p = p.next!;
      if (p === start) return p.index;
      // console.log(`if=true`)
    } else {
      const next = p.next!;
      p = next;
      start = next;
      surplus = start.gas;
      // console.log(`if=false`)
    }
    if (head === start && start === p) return -1;
  } while (true);
}

// 链表
interface LinkList{
  gas: number;
  cost: number;
  index: number;// 从1开始
  next?: LinkList | null
}

(() => {
  // console.log('输出=',canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
  // console.log('输出=',canCompleteCircuit([2,3,4], [3,4,3]))
  console.log('输出=',canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))
})()
