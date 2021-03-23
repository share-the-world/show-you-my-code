package org.develop.algorithm;
/**
 * 罗马数字转换成整数
 * @author hsy
 */

import java.util.logging.Logger;

public class RomanToInt {
    Logger log = Logger.getLogger(RomanToInt.class.getName());
    /**
     *  输入: "LVIII"
        输出: 58
        解释: L = 50, V= 5, III = 3.

        输入: "IX"
        输出: 9
        通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，
        例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
        同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
     * @return 整数
     */
    public int romanToInt(String str){
        char[] charArray = str.toCharArray();
        int sum = 0;
        int curr = getValue(charArray[0]);
        for (int i = 1; i < charArray.length; i++) {
            int next = getValue(charArray[i]);
            log.info(curr + "   " + next);
            if(curr < next){
                sum -= curr;
            }else{
                sum += curr; 
            }
            curr = next;
        }
        sum += curr;
        return sum;
    }

    private int getValue(char ch) {
        switch(ch) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}
