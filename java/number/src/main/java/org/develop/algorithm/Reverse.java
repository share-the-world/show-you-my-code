package org.develop.algorithm;

public class Reverse {
    /**
     * 123
     * 0 * 100 + 2 * 10 + 3 * 1
     */
    public int reverse(int num){
        int rtn = 0;
        while(num != 0){
            int pop = num % 10;
            num = num / 10;
            boolean rangeUpper = rtn > Integer.MAX_VALUE / 10 || (rtn == Integer.MAX_VALUE / 10 && pop > 8);
            if(rangeUpper){
                return 0;
            } 
            boolean rangeLower = rtn < Integer.MIN_VALUE / 10 || (rtn == Integer.MIN_VALUE / 10 && pop < -7) ;
            if(rangeLower){
                return 0;
            }
            rtn = rtn * 10 + pop;
        }
        return rtn;
    }
}
