/**
 * 防抖
 * @returns {(fn: Function, duration: number) => void}
 */
function debounce() {
  let timer;

  return function (fn, duration) {
    clearTimeout(timer);
    timer = setTimeout(fn, duration);
  };
}

const debounceFn = debounce();

async function testCase() {
  for (let i = 0; i < 5; i++) {
    debounceFn(() => {
      console.log("执行了。。。。");
    }, 3000);
  }
}
testCase();

// node javascript/src/interview/03-debounce.js
