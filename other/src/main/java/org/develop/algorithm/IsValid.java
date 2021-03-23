package org.develop.algorithm;

import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class IsValid {
    /**
     * 因为成对的括号，存在先进做括号，后出右括号的规则，
     * 所以遇到左括号就进栈，遇到右括号就出栈并且校验，直到最后都抵消为空
     */
    public boolean isValid(String s) {
        Map<Character, Character> map = new HashMap<>();
        map.put('(', ')');
        map.put('[', ']');
        map.put('{', '}');

        Deque<Character> stack = new LinkedList<>();
        for (char c : s.toCharArray()) {
            if (map.containsKey(c)) {
                stack.add(c);
            } else {
                if (stack.isEmpty() || map.get(stack.removeLast()) != c) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
