/**
 * 1047. 删除字符串中的所有相邻重复项
 * https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} S 
 * @returns 
 */
var removeDuplicates = function(S) {
    let i =0;
    while(i < S.length){
        if (S.charAt(i) === S.charAt(i+1)) {
            S = S.substring(0,i) + S.substring(i+2);
            i = 0;
        } else {
            i ++;
        }
    }
    console.log('s=',S)
    return S
};

removeDuplicates("abbac")