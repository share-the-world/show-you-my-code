export const isLongPressedName = (name: string, typed: string): boolean => {
  if (!name || !typed) return false;
  const names = name.split('');
  const types = typed.split('');

  let count1 = 0, count2 = 0;
  let pointer = 0;

  let letter = names[0];
  while(names.length > 0 || types.length > 0) {
    count1 = doShift(letter,names);
    count2 = doShift(letter,types);
    console.log('letter:',letter)
    pointer ++;
    letter = names[0] || types[0];

    console.log(`下个字母${letter},pointer=${pointer}, count1=${count1},count2=${count2},names=${names.toString()}, types=${types.toString()}`)
    if (count1 > count2 || count1 === 0) return false;
  }
  return true;
}

export const doShift = (s: string,arr: string[]): number => {
  if (arr.length === 0) return 0;
  let l: (string | undefined) = arr[0];
  let count = 0
  while(s === l){
    if (s === arr[0]) {
      count ++;
      l = arr.shift();// 移除第一元素
    } else {
      break;// 结束循环
    }
  }
  // console.log(`s=${s}, count=${count},arr=${arr}`)
  return count;
}