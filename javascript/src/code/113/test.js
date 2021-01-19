setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
    process.nextTick(() => {console.log('nextTick')})
  });
  
  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);