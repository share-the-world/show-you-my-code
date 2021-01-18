/**
 * 1018. 可被 5 整除的二进制前缀
 * https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/
 * @param {*} A 
 */
var prefixesDivBy5 = function(A) {
    let pre = 0, res = [];
    
    for (let i = 0; i < A.length; i ++){
        pre += ((pre << i) + A[i])
        res.unshift(pre % 5 === 0)
    }
    console.log(res)
    return res;
};
prefixesDivBy5([1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1])
