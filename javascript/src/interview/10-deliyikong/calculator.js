function ADD(a,b){
  return a + b
}
function SUB(a,b){
  return a - b
}
function MUL(a,b){
  return a * b
}
function ADD(a,b){
  return a + b
}
function DIV(a,b){
  return a / b
}

function parse(str) {
  return eval(str)
}

console.log(parse('ADD(1,2)'))
console.log(parse('SUB(2,1)'))
console.log(parse('MUL(2,1)'))
console.log(parse('DIV(4,2)'))



// node javascript/src/interview/10-deliyikong/calculator.js