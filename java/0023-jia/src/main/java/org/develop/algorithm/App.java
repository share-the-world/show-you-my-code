package org.develop.algorithm;

/**
 * Hello world!
 * @author heshiyuan
 */
public class App{

    public boolean doIt(String name, String typed){
        if(null==name || null==typed){
            return false;
        }
        int i=0, j=0;
        while(i < name.length() || j < typed.length()){
            // 相等，两个指针都平移
            if (i<name.length()&&j<typed.length()&&name.charAt(i)==typed.charAt(j)){
                i++;
                j++;
            }else {
                // 不相等，第二个指针后移
                if (j>0 && j<typed.length()&&typed.charAt(j)==typed.charAt(j-1)){
                    // 如果跟前一个相等，后移
                    j++;
                }else{
                    // 不相等直接return
                    return false;
                }
            }
        }
        return i==name.length() && j==typed.length();
    }
}
