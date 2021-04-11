package org.develop.algorithm;

import java.util.logging.Logger;

import org.junit.Test;

public class IsPalindromeTest {
    Logger log = Logger.getLogger(IsPalindromeTest.class.getName());
    IsPalindrome app = new IsPalindrome();
    @Test
    public void isPalindrome(){
        log.info("" + app.isPalindrome(123));
        log.info("" + app.isPalindrome(12221));
        log.info("" + app.isPalindrome(-1));
    }    
}
