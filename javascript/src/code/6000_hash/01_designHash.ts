/**
 * 设计哈希集合
 * https://leetcode-cn.com/leetbook/read/hash-table/xh377h/
 */
export class MyHashSet{
  array: number[];
  constructor(){
    this.array = [];
  }
  // 增
  add(key: number): void{
    if (!this.contains(key)) {
      this.array.push(key)
    }
  }
  // 删
  remove(key: number): void{
    const index = this.findIndex(key)
    if (index >= 0) {
      this.array.splice(index,1);
    }
  }
  // 查
  contains(key: number): boolean{
    return this.findIndex(key) >= 0;
  }

  findIndex(key: number): number{
    return this.array.findIndex(i => i === key);
  }
  console(){
    console.log('my-hash=',this.array)
  }
}