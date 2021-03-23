package org.develop.algorithm;

import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class IsValid {
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
