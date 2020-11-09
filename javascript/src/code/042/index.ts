
/**
 * 973. 最接近原点的 K 个点
 * https://leetcode-cn.com/problems/k-closest-points-to-origin/
 * @param points 
 * @param K 
 */
export const kClosest = (points: number[][], K: number) => {
  points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))
  // console.log('排序后=',points)
  if (K < points.length) {
    points.length = K;
  }
  return points
}