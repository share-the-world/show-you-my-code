/**
 * 989. 数组形式的整数加法
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 * @param {*} A 
 * @param {*} K 
 */
var addToArrayForm = function(A, K) {
    console.log('A=',A)
    console.log('K=',K)
    let n = K, kArr = [],res = [];
    while(n > 0) {
        kArr.unshift(n % 10)
        n = Math.floor(n / 10);
    }
    console.log('kArr=',kArr)
    let len = kArr.length > A.length ? kArr.length  : A.length;
    let b = 0;// 进制位
    for(let i = len-1; i >= 0; i --){
        const num1 = A.pop() || 0;
        const num2 = kArr.pop() || 0;
        const sum = b + num1 + num2
        b = sum >= 10 ? 1: 0;
        res.unshift(sum % 10)
    }
    if (b > 0) {
        res.unshift(1)
    }
    console.log('res=',res)
    return res;
};


// addToArrayForm([1,2,0,0], 34)
// addToArrayForm([2,7,4], 181)
addToArrayForm([2,1,5], 806)
// addToArrayForm([1,2,0,0], 34)