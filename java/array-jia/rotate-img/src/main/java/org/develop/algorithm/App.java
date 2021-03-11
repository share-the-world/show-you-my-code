package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * @author hsy
 */
public class App {
    /**
     * 3 * 3  n*n
     * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
     * 输出：[[7,4,1],[8,5,2],[9,6,3]]
     * 
     * matrix[0][0] -> matrix[0][2] 
     * matrix[0][1] -> matrix[1][2]
     * matrix[0][2] -> matrix[2][2]
     * matrix[i][j] -> matrix[j][3-1-i] 
     * @param args
     */
    public void rotateImg1(int[][] matrix){
        int n = matrix.length;
        int[][] matrixTemp = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrixTemp[j][n-1-i] = matrix[i][j]; 
            } 
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = matrixTemp[i][j]; 
            } 
        }
        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i])); 
        }
    }
    /**
     * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
     * 输出：[[7,4,1],[8,5,2],[9,6,3]]
     */
    public void rotateImg2(int[][] matrix){
        if(null == matrix || matrix.length == 0 || matrix.length ==1 ){
            return;
        }
        int n = matrix.length;
        // 行
        for (int i = 0; i < n/2; i++) {
            // 列
            for (int j = 0; j < (n + 1)/2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[n-1-j][i];
                matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
                matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
                matrix[j][n-1-i] = temp;
            }
        }
        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i])); 
        }
    }
}
