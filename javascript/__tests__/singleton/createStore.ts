/**
 * 创建store
 * @param {Function} reducer (state, action) => state
 */
export const createStore = (reducer:any) => {
    let state = {};
    let listeners:any = [];
    return {
        getState:() => {
            return state
        },
        dispatch: (action:any) => {
            state = reducer(state, action);
            listeners.forEach((listener:any) => listener());
        },
        subscribe: (callback:any) => {
            listeners.push(callback) 
        }
    }
}