/**
 * 1002. 查找常用字符
 * @param A 
 */
export const commonChars = (A: string[]): string[] => {
  const res: string[] = [];//结果集
  let position = 0;
  let start:string = A[position];// 第一个字符串
  let letter = start.substring(0,1);//第一个字符串的第一个字符
  const statistic = start.split('').map((letter,position) => {
    return { letter, count:0, position }
  })
  while(position < start.length){
    A.map((str,pos: number) => {
      const index = str.indexOf(letter);
      // console.log(`pos=${pos},index=${index}`)
      if (index >= 0) {//找到
        A[pos] = subString(str,index)// 去掉目标字符
        statistic[position].count ++;//次数+1
      }
    });
    console.log(`字符=${letter}，出现次数=${statistic[position].count}, 去除该字符后=${JSON.stringify(A)}`,)
    position ++;
    letter = start.substring(position,position+1);// 指针—+1
    
  }
  statistic.map(item => {
    if (item.count === A.length) {
      res.push(item.letter)
    }
  })
  console.log('结果：',JSON.stringify(res))
  return res;
}
// 去掉index位置上的字符,返回新字符
const subString = (str: string, index: number) => {
  if (index === 0) {
    return str.substring(index+1);//去掉第一个字符
  }else if (index === str.length - 1) {
    return str.substring(0,str.length -1);// 去掉最后一个字符
  } else {
    return str.substring(0,index,) + str.substring(index+1);// 去掉index位置上的字符
  }
}

