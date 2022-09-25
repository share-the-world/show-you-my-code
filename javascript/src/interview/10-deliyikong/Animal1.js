/**
 * 只用setTimeout
 * @param {string} name
 */
function Animal1(name) {
  this.name = name;
  this.queue = [];

  this.queue.push(() => {
    console.log(`Hi This is ${this.name}`);
    this.next()
  });
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
      this.next()
    }, 0)
  );

  this.eat = function (thing) {
    this.queue.push(() => {
      console.log(`Eat ${thing}~`);
      this.next();
    });
    return this;
  };

  this.sleep = function (wait) {
    console.log(`Sleep ${wait}s ...`);
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`Wake up after ${wait}s`);
        this.next();
      }, wait * 1000);
    });
    return this;
  };

  this.sleepFirst = function (wait) {
    console.log(`Sleep ${wait}s ...`);
    this.queue.unshift(() => {
      setTimeout(() => {
        console.log(`Wake up after ${wait}s`);
        this.next();
      }, wait * 1000);
    });
    return this;
  };

  this.next = function () {
    if (!this.queue.length) return;
    const fn = this.queue.shift();
    fn && fn();
  };
}

new Animal1("cat").sleepFirst(5).eat(`supper`);

// node javascript/src/interview/10-deliyikong/Animal1.js
