package org.develop.algorithm;

import java.util.ArrayList;
import java.util.List;

public class YangHuiTriangle {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ret = new ArrayList<>();
        for (int i = 0; i < numRows; ++i) {
            List<Integer> row = new ArrayList<>(); 
            for (int j = 0; j <= i; ++j) {
                if(j==0 || j==i){
                    row.add(1);
                }
                else {
                    // 上一行左右两个数相加
                    row.add(ret.get(i-1).get(j-1) + ret.get(i-1).get(j));
                }
            }
            ret.add(row);
        }        
        return ret;
    } 
}
