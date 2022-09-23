function Animal(name) {
  this.name = name;
  this.promise = undefined;
  console.log(`This is ${name}`);

  /**
   * sleep
   * @param {number} wait
   */
  this.sleep = function (wait) {
    console.log(`Sleep ${wait}s ...`);
    this.promise = new Promise((resolve) =>
      setTimeout(() => {
        console.log(`Wake up after ${wait}s`);
        resolve(this);
      }, wait * 1000)
    );
    return this;
  };
  this.eat = function (word) {
    if (this.promise) {
      this.promise.then(() => {
        console.log(`Eat ${word}~`);
        this.promise = undefined;
      });
    } else {
      console.log(`Eat ${word}~`);
    }
    return this;
  };

}

// new Animal("cat").sleep(5).eat("dinner");

new Animal('cat').eat('dinner').eat('supper');

// node javascript/src/interview/10-deliyikong/Animal.js
