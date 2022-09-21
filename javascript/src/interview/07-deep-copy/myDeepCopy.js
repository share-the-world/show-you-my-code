

const deepCopy = (data) => {
  // Object Array  Function Date 
  if (data && ['object', 'function'].indexOf(typeof data) >= 0) {

  } else {
    typeof data === ''
    // boolean bigint number string undefined null symbol
    return data
  }
}