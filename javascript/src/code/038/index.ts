
export const ladderLength =(beginWord: string, endWord: string, wordList: string[]): number => {
  let min = Number.MAX_VALUE;
  const beginChars: string[] = []
  const endChars: string[] = []
  for(let i =0; i < beginWord.length; i ++) {
    if (endWord.indexOf(beginWord.charAt(i)) < 0) {
      beginChars.push(beginWord.charAt(i))
      endChars.push(endWord.charAt(i))
    }
  }
  

  return min;
}