var uniqueOccurrences = function(arr) {
  if (!arr) return false;
  const set = new Set(arr)
  const res = []
  for(key of set) {
      console.log(`key=${key}`)
      let count = 0;
      for (let i =0; i < arr.length; i ++) {
          
          if (arr[i] === key) {
              count ++;
          }
      }
      res.push(count)
  }
  console.log('set:',set)
  console.log('res:',res)
  return new Set(res).size === res.length;
};

(() => {
  console.log('结果：',uniqueOccurrences([]))
})()