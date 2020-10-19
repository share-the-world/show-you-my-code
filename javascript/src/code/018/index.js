var sortedSquares = function(A) {
  const arr = A.reduce((arr,item) => {
      arr.push(item*item *1)
      return arr;
  }, [])
  console.log('排序前：',arr)
  const res = arr.sort((a,b) => a> b)
  console.log('排序后：',res)
  return res;
};

const case1 = [-4,-1,0,3,10];
const case2 = [-7,-3,2,3,11];

(() => {
  sortedSquares(case1)
})()

document.getElementById('p_id').html = Date.now()