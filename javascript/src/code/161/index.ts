/**
 * 227. 基本计算器 II   
 * https://leetcode-cn.com/problems/basic-calculator-ii/
 * @param s 
 * @returns 
 */
const calculate = (s: string): number => {
    const stack1 = [];
    const stack2 = []
    const rule: any = {
        '+': function(before: string, next: string) {
            return Number(before) + Number(next)
        },
        '-': function(before: string, next: string) {
            return Number(before) - Number(next)
        },
        '*': function(before: string, next: string) {
            return Number(before) * Number(next)
        },
        '/': function(before: string, next: string) {
            return Math.floor(Number(before) / Number(next))
        },
    }
    let i = 0;
    while(i < s.length){
        const n = Number(s.charAt(i));
        while (s.charAt(i+1) === '/' || s.charAt(i+1) === '*') {
            rule[s.charAt(i+1)](n, s.charAt(i+2))
            i += 3;
        }
    }
    return 0;
}

calculate("3+2*2")
calculate(" 3/2 ")
calculate(" 3+5 / 2 + 5*3/3 -7 ")