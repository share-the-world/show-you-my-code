package org.develop.algorithm;

/**
 * Hello world!
 * @author hsy
 */
public class App {

    public boolean validSudoku2(char[][] args){
        boolean[][] 
        row = new boolean[9][9], 
        col = new boolean[9][9], 
        area = new boolean[9][9];        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (args[i][j] == '.') {
                    continue;
                }
                int c = args[i][j] - '1';
                int idx = i / 3 * 3 + j / 3;
                if (!row[i][c] && !col[j][c] && !area[idx][c]) {
                    row[i][c] = col[j][c] = area[idx][c] = true;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * 数字 1-9 在每一行只能出现一次。
     * 数字 1-9 在每一列只能出现一次。
     * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
     * [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
       ]
     */
    public boolean validSudoku(char[][] args){
        int[][] row = new int[9][10];
        int[][] col = new int[9][10];
        int[][] grid = new int[9][10];
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if('.' == args[i][j]){
                    continue;
                }
                // '0' = 48  (int) '0' = 48
                int num = args[i][j] - '0';
                if(row[i][num] == 1){
                    return false;
                }
                if(row[j][num] == 1){
                    return false;
                } 
                if(grid[(i/3)*3+j/3][num] == 1){

                }
                row[i][num] = 1;
                col[j][num] = 1;
                grid[(i/3)*3+j/3][num] = 1;
            }
        }
        return true;
    }
}
