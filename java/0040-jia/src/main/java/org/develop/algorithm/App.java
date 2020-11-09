package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {
    public int doIt( int[] args ){
        int profit = 0;
        for (int i = 1; i < args.length; i++) {
            int temp = args[i] - args[i - 1];
            if (temp > 0) {
                profit += temp;
            }
        }
        return profit;
    }
}
