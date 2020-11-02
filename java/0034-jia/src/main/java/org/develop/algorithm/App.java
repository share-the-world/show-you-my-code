package org.develop.algorithm;

/**
 * @author heshiyuan
 */
public class App {

    public int[][] doIt( int[][] args ){
        int n = args.length;
        for (int i = 0; i < n / 2; ++i) {
            for (int j = 0; j < (n + 1) / 2; ++j) {
                int temp = args[i][j];
                args[i][j] = args[n - j - 1][i];
                args[n - j - 1][i] = args[n - i - 1][n - j - 1];
                args[n - i - 1][n - j - 1] = args[j][n - i - 1];
                args[j][n - i - 1] = temp;
            }
        }
        System.out.println(args.toString());
        return args;
    }
}
