import { createStore } from "./createStore";
import reducer from './reducer'

const getSingleton = function(){
    let singleton: any;
    return function(){
        singleton || (singleton = createStore.apply(null, [reducer]))
    }
}

const store1 = getSingleton();
const store2 = getSingleton();

console.log(store1 === store2)