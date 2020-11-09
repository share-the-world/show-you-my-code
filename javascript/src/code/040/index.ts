/**
 * 122. 买卖股票的最佳时机 II
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param prices 
 */
export const maxProfit = (prices: number[]): number => {
  if (prices.length < 2) return 0;
  let sum = 0;
  let i = 0, j = 1;
  while(j <= prices.length) {
    console.log(`i=${i}, j=${j}`)
    if (prices[j] > prices[j-1]) {
      j ++;
    } else {
      sum += (prices[j-1] - prices[i])
      i = j;
      j ++;
    }
  }
  return sum;
}