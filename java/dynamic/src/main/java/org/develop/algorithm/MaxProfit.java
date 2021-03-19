package org.develop.algorithm;
/**
 * 股票最大收益
 * @author hsy
 */
public class MaxProfit {
    /**
     * 时间复杂度：O(n2)。循环运行 n(n−1)/2​ 次。
     * 空间复杂度：O(1)。只使用了常数个变量。
     * @param prices
     * @return
     */
    public int maxProfit(int[] prices){
        int sum = 0;
        for (int i = 0; i < prices.length-1; i++) {
            for (int j = i+1; j < prices.length; j++) {
                int add = prices[j] - prices[i];
                if(add > sum){
                    sum = add;
                }
            }
        }
        return sum;
    }
    /**
     * 
        时间复杂度：O(n)，只需要遍历一次。
        空间复杂度：O(1)，只使用了常数个变量。
     */
    public int maxProfit2(int prices[]) {
        int minprice = Integer.MAX_VALUE;
        int maxprofit = 0;
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minprice) {
                minprice = prices[i];
            } else if (prices[i] - minprice > maxprofit) {
                maxprofit = prices[i] - minprice;
            }
        }
        return maxprofit;
    }
}
