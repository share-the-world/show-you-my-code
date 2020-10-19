export class Stack<T> {
  stack: T[];
  constructor(arr: T[]){
    this.stack = arr;
  }
  /**
   * 移除栈顶部的对象，并返回改对象
   */
  public pop():T | undefined {
    if (this.stack.length <= 0) return undefined;
    
    return this.stack.shift();
  }
  // 把项压入堆栈顶部
  public push(): void{

  }
}