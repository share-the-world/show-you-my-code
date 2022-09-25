const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function PromiseB(executor) {
    var _this = this
    this.state = PENDING; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    this.onFulfilled = []
    this.onRejected = []
    function resolve(value) {
        if(_this.state === PENDING){
            _this.state = FULFILLED
            _this.value = value
            _this.onFulfilled.forEach(fn => fn(value))
        }
    }
    function reject(reason) {
        if(_this.state === PENDING){
            _this.state = REJECTED
            _this.reason = reason
            _this.onRejected.forEach(fn => fn(reason))
        }
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

PromiseB.prototype.then = function (onFulfilled, onRejected) {

    var _this = this

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    var promise2 = new PromiseB((resolve, reject)=>{
        if(_this.state === FULFILLED){
            setTimeout(()=>{
                try {
                    let x = onFulfilled(_this.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })

        } else if(_this.state === REJECTED){
            setTimeout(()=>{
                try {                    
                    let x = onRejected(_this.reason)
                    resolvePromise(promise2, x ,resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })
        } else if(_this.state === PENDING){
            _this.onFulfilled.push(()=>{
                setTimeout(()=>{
                    try {                        
                        let x = onFulfilled(_this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
            _this.onRejected.push(()=>{
                setTimeout(()=>{
                    try {                        
                        let x = onRejected(_this.reason)
                        resolvePromise(promise2, x ,resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
        }
        
    })
    return promise2
};

function resolvePromise(promise2, x, resolve, reject){

    if(promise2 === x){
        reject(new TypeError('Chaining cycle'))
    }

    if(x && typeof x === 'object' || typeof x === 'function'){
        let used;
        try {
            let then = x.then
            if(typeof then === 'function'){
                then.call(x, (y)=>{
                    if (used) return;
                    used = true
                    resolvePromise(promise2, y, resolve, reject)
                }, (r) =>{
                    if (used) return;
                    used = true
                    reject(r)
                })
            } else {
                if (used) return;
                used = true
                resolve(x)
            }
        } catch(e){
            if (used) return;
            used = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}


PromiseB.defer = PromiseB.deferred = function () {
    let dfd = {};
    dfd.promise = new PromiseB((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
