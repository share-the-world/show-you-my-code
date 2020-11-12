/**
 * 922. 按奇偶排序数组 II
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @param A 
 */
export const sortArrayByParityII = (A: number[]): number[] => {
  console.log('输入=',A)
  for(let i = 0; i < A.length; i ++) {
    if (i%2 !== A[i]%2) {
      for (let j = i +1; j < A.length; j +=2) {// 如果是奇数位，就去后面的偶数位找，否则反之
        if (A[i]%2 !== A[j]%2) {
          console.log(`i=${i}, j=${j}, Ai=${A[i]}, Aj=${A[j]}, `)
          let temp = A[j];
          A[j] = A[i]
          A[i] = temp;
          break;
        }
        // if ((j === A.length - 1 || j === A.length - 2)){// 同为奇/偶数
        //   return A;
        // }
      }
    }
    
  }
  return A;
}