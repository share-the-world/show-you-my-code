package org.develop.algorithm;

import java.util.Arrays;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {
    static int min_prime = 2;
    public int doIt(int n){
        // 最小的质数是2
        if (n <= min_prime) { return 0; }
        // 创建整个素数数组
        boolean[] primes = new boolean[n];  
        // 初始化全部位素数
        Arrays.fill(primes, true);      
        // 自然数前两个不是质数
        primes[0] = false;
        primes[1] = false;                  
        int sqrt = (int)Math.sqrt(n);       
        for (int i = 2; i <= sqrt; i++) {
            // 不是素数，可以跳过
            if (!primes[i]) {continue;}
            /**
             * i << 1 i的二进制数向左移动一位
             * << : 左移运算符，num << 1,相当于num乘以2
             * >> : 右移运算符，num >> 1,相当于num除以2
             */
            for (int multi = i<<1; multi < n ; multi += i){
                primes[multi] = false;
            }
        }
        int count = 0;
        //统计数量
        for (boolean prime : primes) {      
            if (prime) {count++;}
        }
        return count;
    }
}
