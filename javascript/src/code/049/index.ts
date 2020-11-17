
/**
 * 写不出来
 * 406. 根据身高重建队列
 * https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * @param people 
 */
export const reconstructQueue = (people: number[][]): number[][] => {
  if (people.length <= 1) return people;
  people.sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  console.log('排序后=', people)
  const res: number[][] = [people.shift()!];
  while(people.length > 0){
    const per: number[] = people.shift()!;
    let count = 0;
    for (let i = 0; i < res.length; i ++) {
      if (i === res.length - 1 && count <= per[1]) {
        res.push(per)
        break;
      } 
      if (res[i][0] >= per[0]){
        count ++;
      }
      if (count !== 0 &&count === per[1]) {
        res.splice(i+1,0, per)
        break;
      }
    }
  }
  return res;
}

(() => {
  console.log('输出值=',reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))
  // console.log('输出值=',reconstructQueue([[5,0],[7,0], [4,4], [7,1], [6,1], [5,2],[8,0],[7,2]]))
})()