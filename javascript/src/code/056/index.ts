/**
 * 452. 用最少数量的箭引爆气球
 * https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-intersectionoons/
 * @param points 
 */
export const findMinArrowShots = (points: number[][]): number => {
  points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  console.log('————————————————————————————')
  console.log('输入=', points)
  const res: number[][] = [];
  while(points.length > 0) {
    let intersection= points.shift()!;//交集
    let i = 0
    while(i < points.length) {
      // 求交集
      if ((intersection[0] >= points[i][0] && intersection[0] <= points[i][1]) 
        || (intersection[1] >= points[i][0] && intersection[1] <= points[i][1]
        || (intersection[0] <= points[i][0] && intersection[1] >= points[i][0]) )) {// a ∈ [c,d] || b ∈ [c,d] || [c,d] ∈ [a,b]
          const start = Math.max(intersection[0], points[i][0]);
          const end = Math.min(intersection[1], points[i][1]);
          intersection = [start, end];
          points.splice(i,1);
      } else {
        i ++;
      }
    }
    res.push(intersection);
  }
  console.log('res=',res)
  return res.length;
}
  
(() => {
  // console.log('输出=',findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
  // console.log('输出=',findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))
  // console.log('输出=',findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))
  // console.log('输出=',findMinArrowShots([[1,2]]))
  // console.log('输出=',findMinArrowShots([[2,3],[2,3]]))
  // console.log('输出=',findMinArrowShots([[ 6, 6 ], [ 7, 12 ], [ 9, 10 ]]))
  console.log('输出=',findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]))
})()