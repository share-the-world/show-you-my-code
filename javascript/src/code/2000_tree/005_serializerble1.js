var serialize = function(root) {
  if (!root) return '[]';
  const level = getMaxLevel(root);
  const queue = [root];
  const list = []
  let count = 0;
  while(queue.length > 0){
      count ++;
      const size = queue.length;
      for (let i =0; i < size; i ++) {
          const node = queue.shift();
          list.push(node ? node.val : null);

          queue.push(node ? node.left : null);
          queue.push(node ? node.right : null);
      }
      if (count === level) break;
  }
  return JSON.stringify(list)
};



/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const list = JSON.parse(data);
  if (list.length <= 0 || !list[0]) return null;
  const nodeList = [];
  nodeList.length = list.length
  // node列表填充
  for (let i =0; i < list.length; i ++) {
      if (list[i]) {
          nodeList[i] = {val: list[i], left: null, right: null}
      }
  }
  // 添加左右节点
  for (let i =0; i < nodeList.length; i ++) {
      if (nodeList[i]) {
          nodeList[i].left = nodeList[2*i+1] || null;
          nodeList[i].right = nodeList[2*i+2] || null;
      }
  }
  
  return nodeList[0];
};

// 最大深度，从1开始
var getMaxLevel = (root) => {
  if (!root) return 1;
  let level = 0;
  const queue = [root];
  while(queue.length > 0){
      level ++;
      const size = queue.length;
      for(let i =0; i < size; i ++) {
          const node = queue.shift();
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
  }
  return level;
}

// const case1 = '[1,2,3,null,null,4,5]';

// 执行测试
(() => {
  const node = deserialize('[4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]')
  // console.log('反序列化：',JSON.stringify(node))
  const str = serialize(node)
  console.log('序列化:',str)
})()