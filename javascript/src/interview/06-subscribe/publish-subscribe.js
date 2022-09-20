/**
 * 发布订阅模式
 * @returns 
 */
function ps() {
  const listeners = [];
  function subscribe(fn) {
    listeners.push(fn);
  }

  function publish(...args) {
    listeners.forEach((fn) => {
      fn(...args);
    });
  }

  function remove(fn) {
    return listeners.filter((v) => v !== fn);
  }
  return { subscribe, publish, remove };
}

// 测试： node javascript/src/interview/06-subscribe/publish-subscribe.js
const listener = ps();

listener.subscribe((...args) => {
  console.log(...args)
})

for (let index = 0; index < 5; index++) {
  listener.publish(index)
}

