const data11 = [
  { id: 1, next: 2 },
  { id: 3, next: 4 },
  { id: 4, next: 5 },
  { id: 5, next: 6 },
  { id: 6, next: 7 },
  { id: 7, next: 8 },
  { id: 8, next: 9 },
  { id: 2, next: 10 },
  { id: 20, next: 30 },
  { id: 30, next: 40 },
  { id: 100, next: 78 },
];

/**
 * getLinks
 * @param {Array<{id: number; next: number}>} data
 */
function getLinks(data) {
  data.sort((a, b) => {
    return a.id - b.id;
  });
  /**
   *
   * @param {Array} datas
   * @param {Array} newArr
   * @param {number} id
   */
  const recursive = (datas, newArr) => {
    if (!datas || !datas.length) return;
    const head = data.shift();
    newArr.push([head]);
    let i = 0,
      id = head.next;
    while (i < datas.length) {
      if (datas[i].id === id) {
        const target = datas.splice(i, 1)[0];
        id = target.next;
        newArr[newArr.length-1].push(target)
      } else {
        i++;
      }
    }
    recursive(datas, newArr);
  };

  const arr = [];
  recursive(data, arr);
  return arr;
}

// node javascript/src/interview/10-deliyikong/getLinks.js
console.log(getLinks(data11));
