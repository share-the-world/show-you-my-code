function deepCopy(data) {
  //string,number,bool,null,undefined,symbol
  //object,array,date
  if (data && typeof data === "object") {
    //针对函数的拷贝
    if (typeof data === "function") {
      let tempFunc = data.bind(null);
      tempFunc.prototype = deepCopy(data.prototype);
      return tempFunc;
    }

    switch (Object.prototype.toString.call(data)) {
      case "[object String]":
        return data.toString();
      case "[object Number]":
        return Number(data.toString());
      case "[object Boolean]":
        return new Boolean(data.toString());
      case "[object Date]":
        return new Date(data.getTime());
      case "[object Array]":
        var arr = [];
        for (let i = 0; i < data.length; i++) {
          arr[i] = deepCopy(data[i]);
        }
        return arr;

      //js自带对象或用户自定义类实例
      case "[object Object]":
        var obj = {};
        for (let key in data) {
          //会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
          obj[key] = deepCopy(data[key]);
        }
        return obj;
    }
  } else {
    //string,number,bool,null,undefined,symbol
    return data;
  }
}

// node javascript/src/interview/07-deep-copy/index.js
const obj = {
  name: "zhangsan",
  age: 23,
  date: new Date(),
  fn: function(){
    console.log()
  },
  arr: [
    1,
    {
      key1: 2222,
      key2: 3333,
    },
  ],
};

function test() {
  console.log(1111)
}

console.log(deepCopy(test))

// console.log("deepCopy(obj)", deepCopy(obj));
