export const partitionLabels = (S: string): number[] => {
  const arr = S.split('');
  let start = 0;
  const res: number[] = [start];
  while (start < arr.length) {
    const str = S.substring(start);//截取字符串
    console.log('str:',str)
    const length = loop(str);// 片段长度
    start += length;
    res.push(start)
  }
  const res1 = []
  for (let i = 0; i < res.length-1; i++) {
    res1.push(res[i+1] - res[i])
  }
  console.log('res:',res)
  console.log('res1:',res1)
  return res1;
}

// 返回截取长度
const loop = (str:string): number => {
  const splits = str.split('');
  let pointer = 0;
  while(pointer < splits.length) {
    const leftStr = str.substring(0,pointer+1);
    const rightStr = str.substring(pointer+1)
    const has = isExist(leftStr, rightStr);
    if (has) {
      pointer ++;
    } else{
      return pointer+1
    }
    
  }
  return pointer+1;
}
const isExist = (str1:string, str2:string): boolean => {
  const arr = str1.split('');
  for (let i = 0; i < arr.length; i++) {
    if(str2.indexOf(arr[i])>=0){
      return true;
    }
  }
  return false
}