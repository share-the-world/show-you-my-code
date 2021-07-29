package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App {

    public int lengthOfLastWord(String s) {
        s = s.trim();
        int i = s.lastIndexOf(" ");
        return s.substring(i+1).length();
    }
}
