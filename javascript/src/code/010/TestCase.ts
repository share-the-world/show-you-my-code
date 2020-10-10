import {ListNode, ListNodeType} from '../../definition'

// 测试用例1,有环
export const getCase1 = ():ListNode => {
  let cycle: ListNodeType = null;
  cycle = {
    val: 1,
    next:{
      val: 22,
      next: {
        val: 33,
        next: {
          val:777,
          next: {
            val: 9786,
            next: {
              val: 345,
              next:cycle
            }
          }
        }
      }
    }
  }
  // 将自身副职给cycle的下移节点，变为真正的 循环
  cycle.next = cycle;
  const aCase: ListNode = {
    val: 66,
    next:cycle
  }
  return aCase
}
// 测试用例-无环
export const getCase2 = (): ListNode => {
  return {
    val: 1,
    next: {
      val:2,
      next:{
        val: 3,
        next: {
          val:4,
          next:{
            val: 5,
            next: {
              val:6,
              next:{
                val: 7,
                next: {
                  val:8,
                  next:{
                    val: 9,
                    next: {
                      val:10,
                      next:null
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}