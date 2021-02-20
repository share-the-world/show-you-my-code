
export const fairCandySwap = (A: number[], B: number[]): number[] => {
    console.log('A=',A)
    console.log('B=',B)
    let temp = A, maxLen = 0, diff = 0, map = new Map(), res : number[] = [];
    if (A.length > B.length) {
        maxLen = A.length
        A = B;
        B = temp;
    } else {
        maxLen = B.length;
    }
    // 求差
    for (let i = 0; i < maxLen; i ++){
        diff += ((A[i] || 0) - (B[i] || 0))
        map.set(B[i],B[i]);
    }
    diff = Math.abs(diff)
    console.log('map=', map)
    for (let i = 0; i < A.length; i ++){
        let n = diff - A[i];
        if (map.get(n) > 0){
            return [A[i], n];
        }
    }
    return []
}

// 测试：yarn run ts-node src/code/125/index.ts 

