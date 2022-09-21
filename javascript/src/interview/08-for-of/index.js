// const obj = {
//   name: "qweq",
//   age: 10,
// };
const obj = [12,34,5]

function iteratorImpl(obj) {
  obj[Symbol.iterator] = function () {
    const keys = Object.keys(obj);
    let index = keys.length;
    return {
      [Symbol.iterator]: function () {
        return this;
      },
      next: function () {
        index--;
        return {
          done: index < 0,
          value: obj[keys[index]],
        };
      },
    };
  };
}

// iteratorImpl(obj)

for (const it of obj) {
  console.log('it',it)
}

// node javascript/src/interview/08-for-of/index.js
