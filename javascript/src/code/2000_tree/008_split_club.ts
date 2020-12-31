/**
 * 切分木棒
 * https://leetcode-cn.com/leetbook/read/interesting-algorithm-puzzles-for-programmers/90ach5/
 */
export const splitClub = (c: number, p: number): number => {
    const arr: number[][] = []
    const loop = (n: number, level: number) => {
        if (n <= 1) return;
        if (arr.length === level){
            arr.push([])
        }
        const levelArr = arr[level];
        levelArr.push(n);
        if (levelArr.length > p) {// 该层超节点数过最大人数
            loop(n,level +1)
        } else {
            const left = Math.floor(n/2)
            const right = n - left;
            loop(left,level +1)
            loop(right,level +1)
        }
    }
    loop(c,0)
    console.log(arr)
    return arr.length;
}
// yarn run ts-node src/code/2000_tree/008_split_club.ts
(() => {
    console.log('结果=',splitClub(100,5))
})()