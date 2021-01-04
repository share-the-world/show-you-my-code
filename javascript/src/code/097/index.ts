/**
 * 605. 种花问题
 * https://leetcode-cn.com/problems/can-place-flowers/
 * @param flowerbed 
 * @param n 
 */
export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
    let i = 0, count = n;
    while(n > 0 && i < flowerbed.length) {
        if (flowerbed[i] === 0 && 
            (flowerbed[i -1] === 0 || flowerbed[i -1] === undefined) && 
            (flowerbed[i +1] === 0 || flowerbed[i +1] === undefined)) {
            flowerbed[i] = 1;
            count --;
        }
        if (count === 0) return true
        i ++;
    }
    return false;
}
// yarn run ts-node src/code/097/index.ts 
console.log('结果=', canPlaceFlowers([1,0,1,0,1,0,0,0,0], 1))
console.log('结果=', canPlaceFlowers([0,0,1,0,0], 2))