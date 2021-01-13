/**
 * 每日一题
 * @param {*} s 
 */
var lengthOfLongestSubstring = function (s = '') {
    let max = 0, i = 0;
    while (i < s.length) {
        let j = i +1;
        while(j <= s.length) {
            let char = s.charAt(j);
            let str = s.substr(i, j-i);
            // console.log(`i=${i}, j=${j},char=${char} str=${str}`)
            if (str.indexOf(char) >= 0) {
                max = Math.max(max, str.length)
                break;
            } else {
                j ++;
            }
        }
        i++;
    }
    console.log(`s=${s}, max=${max}`)
    return max;
};

(() => {

    lengthOfLongestSubstring("abcabcbb")
    lengthOfLongestSubstring("bbbbb")
    lengthOfLongestSubstring("pwwkew")
    lengthOfLongestSubstring("")
    lengthOfLongestSubstring("pwmkew345")
    lengthOfLongestSubstring("dvdf")
})()