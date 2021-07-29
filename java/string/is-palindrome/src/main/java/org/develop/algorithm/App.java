package org.develop.algorithm;

/**
 * Hello world!
 * @author
 */
public class App {
    public boolean isPalindrome(String args){
        if(null==args || args.length()==0){
            return true;
        }
        StringBuilder newStr = new StringBuilder();
        char[] charStr = args.toCharArray();
        for (int i = 0; i < charStr.length; i++) {
            if(Character.isLetterOrDigit(charStr[i])){
                newStr.append(charStr[i]);
            } 
        }
        
        char[] newChar = newStr.toString().toLowerCase().toCharArray();
        int i=0, j= newChar.length - 1;
        while(i < j){
            if(newChar[i] != newChar[j]){
                return false;
            }
            ++ i;
            -- j;
        }
        return true;
    }
}
