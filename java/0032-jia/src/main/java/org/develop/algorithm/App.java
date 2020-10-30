package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {

    public int doIt(int[][] grid){
        int circle = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    if (i == 0 || grid[i-1][j] == 0) {
                        circle += 2;
                    }
                    if (j == 0 || grid[i][j-1] == 0) {
                        circle += 2;
                    }
                }
            }
        }
        System.out.println("circle = " + circle);
        return circle;
    }
}
