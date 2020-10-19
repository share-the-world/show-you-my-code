// 队列
export class Queue<T> {
  queue: T[];
  constructor(arr:T[]){
    this.queue = arr
  }
  /**
   * 向队列中添加元素
   */
  public offer(): boolean{
    return false;
  }

  public poll(): boolean{
    return false;
  }


}