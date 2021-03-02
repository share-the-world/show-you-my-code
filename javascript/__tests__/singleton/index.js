import { createStore } from "./createStore";

const getSingleton = function(fn){
    let singleton;
    return () => singleton || (singleton = createStore.apply(this, arguments))
}

const store = getSingleton(createStore);