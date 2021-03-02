/**
 * 创建store
 * @param {Function} reducer (state, action) => state
 */
export const createStore = (reducer) => {
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