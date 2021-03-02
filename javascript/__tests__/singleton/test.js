const createStore = (reducer) => {
    let state = {};
    let listeners = [];
    return {
        getState:() => {
            return state
        },
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        },
        subscribe: (callback) => {
            listeners.push(callback) 
        }
    }
}

const reducer = (state = {}, action = {}) => {
    return state
}

const getSingleton1 = function(fn){
    let singleton;
    return () => singleton || (singleton = fn.apply(this, arguments))
}
var getSingleton = function (fn) {
    var result;
    return function () {
        return result || ( result = fn.apply(this, arguments) );
    }
};

const store1 = getSingleton(createStore)();
const store2 = getSingleton(createStore)();

console.log(store1 === store2)