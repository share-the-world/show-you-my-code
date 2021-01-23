/**

 */

 // 父类
export function Person(name = ''){
    this.name = name;
    this.say = function(words = ''){
        console.log(`person say ${words}`)
    }
}
// 父类原型
Person.prototype.sex = '男/女'
