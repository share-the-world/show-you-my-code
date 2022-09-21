var o1 = {
  name: 'zhangsan',
  age: 23,
  sex: 'man'
}
var _itEnable = function (obj) {
  obj[Symbol.iterator] = function () {
      var keys = Object.keys(obj), _index = 0;
      return {
          [Symbol.iterator]: function () { return this },
          next: function () {
              return {
                  done: _index === keys.length, 
                  value: obj[keys[_index++]]
              }
          }
      }
  }
  return function remove(){// 移除
      obj[Symbol.iterator] = undefined;
  }
}
// 测试 node javascript/src/interview/08-for-of/impl.js
o1.start = 'start'
_itEnable(o1);
for (var v of o1) {
  console.log('v3=', v)
}


