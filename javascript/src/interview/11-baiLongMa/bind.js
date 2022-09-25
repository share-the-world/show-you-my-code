/**
 * 实现函数add(1,2)(3) ->  6
 */

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("sum", sum);
  console.log(arguments);
  if (arguments.length <= 1) {
    return sum;
  }
  return add.bind(add, sum);
}

console.log(add(1, 2, 3)(4)(5)(6)());
