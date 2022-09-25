const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";
const PromiseA = function (excutor) {
  const _this = this;
  this.state = PENDING;
  this.excutor = excutor;
  this.result = undefined;
  this.error = undefined;
  this.fullfilledQueue = [];
  this.rejectedQueue = [];

  this.resovle = (result) => {
    if (this.state === PENDING) {
      this.state = FULLFILLED;
    }
    this.result = result;
    const then = this.fullfilledQueue.shift();
    if (this.state === FULLFILLED && then) {
      this.result = then(this.result) || undefined;
    }
  };
  this.reject = (error) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
    }
    this.error = error;
    const reject = this.rejectedQueue.shift();
    if (this.state === REJECTED && reject) {
      reject(this.error);
      this.error = undefined;
    }
  };
  this.excutor(this.resovle, this.reject);
};

PromiseA.prototype.then = function (onfullfilled, onrejected) {
  if (this.state === PENDING) {
    if (typeof onfullfilled === "function") {
      this.fullfilledQueue.push(onfullfilled);
    }
    if (typeof onrejected === "function") {
      this.rejectedQueue.push(onfullfilled);
    }
  } else if (this.state === FULLFILLED) {
    return new PromiseA((resolve, reject) => {
      
    })
  }


};

// test: node javascript/src/interview/13-promise/index.js
const p = new PromiseA((resove, reject) => {
  console.log(1);
  setTimeout(() => {
    resove(2);
    reject(3);
  }, 1000);
});

p.then(
  (res) => {
    console.log("res", res);
  },
  (error) => {
    console.log("error", error);
  }
);
