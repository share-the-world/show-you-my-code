package org.develop.algorithm;

public class IsPalindrome {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        String xStr = x + "";
        int length = xStr.length();
        int right = length - 1;
        for (int i = 0; i < length; i++) {
            if (xStr.charAt(i) != xStr.charAt(right)) {
                return false;
            }
            right--;
        }
        return true;
    }
}
