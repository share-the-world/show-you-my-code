/**
 * 两个大数相加(非负整数)
 * 
 * @param a 字符串类型纯数字
 * @param b 字符串类型纯数字
 */

const twoBigintSum1 = (a: string, b: string): string => {
    console.log(a)
    console.log(b)
    // 考虑到最大数为16位，`Number.MAX_SAFE_INTEGER = 9007199254740991`
    // 将字符串每14位拆分为一组
    let i = a.length, j = b.length, res = '', bit = 0;
    while(i > 0 || j > 0) {
        const stra: string = i > 0 ? a.slice(i - 14 > 0 ? i - 14 : 0, i) : '';
        const strb: string = j > 0 ? b.slice(j - 14 > 0 ? j - 14 : 0, j) : '';
        const sum: string = String(Number(stra) + Number(strb))
        if (sum.length === 15) {
            res = (Number(sum.slice(1)) + bit) + res;// 删掉首位数字
            bit = 1;
        } else {
            res = (Number(sum) + bit) + res;
            bit = 0;
        }
        i -= 14;
        j -= 14;
    }
    return bit === 1 ? 1 + res : res;
}



 // 测试 
// console.log( twoBigintSum1('9222222222222222222229992222298567222222222222222222222111199',
//                 '222222222222222222222222222222222222222222222222222222222222222222222222'))

let a = "222222222222222222222222222222222222222222222222222222222222222222222222"

let i = a.length, j = i -14;

while (i >= 0) {
    // console.log(a.slice(j > 0 ? j : 0, i))
    j -= 14;
    i -= 14;
}

console.log(92222222222222 + 22222222222222)