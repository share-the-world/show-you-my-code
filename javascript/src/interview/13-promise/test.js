new Promise((resolve, reject ) => {
  setTimeout(() => {
    console.log(1)
    resolve(110)
  }, 1000);
}).then(value => {
  new Promise((resolve, reject) => {
    console.log(2,value)
    resolve(value)
  }).then(value => {
    console.log(3,value)
    return value
  }).then(value => {
    console.log(4,value)
  })
}).then(value => {
  console.log(5, value)
})

// node javascript/src/interview/13-promise/test.js