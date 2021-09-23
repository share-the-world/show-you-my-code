package org.develop.algorithm;

/**
 * Hello world!
 *
 * @author heshiyuan
 */
public class RemoveDuplicates {
    /**
     * @param args {1, 2, 2, 3, 3}
     */
    public int removeDuplicates(int[] args) {
        if (null == args || args.length == 0) {
            return 0;
        }
        if (args.length == 1) {
            return 1;
        }
        int i = 0, j = 1;
        while (j < args.length) {
            if (args[i] != args[j]) {
                args[i + 1] = args[i];
                j++;
            }
            i++;
        }
        return j;
    }

    public int removeDuplicates2(int[] args) {
        if (null == args || args.length == 0) {
            return 0;
        }
        if (args.length == 1) {
            return 1;
        }
        int slow = 1, fast = 1;
        while (fast < args.length) {
            if (args[fast] != args[fast-1]) {
                args[slow] = args[fast];
                ++slow;
            }
            ++fast;
        }
        return slow;
    }
}
