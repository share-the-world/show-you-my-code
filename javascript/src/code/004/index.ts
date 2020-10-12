export const numJewelsInStones =(J: string ,S: string):number => {
    let n = 0 ;
    const jArr = J.split('');
    S.split('').map(s => {
        if (jArr.includes(s)) {
            n ++;
        }
    })
    return n;
}