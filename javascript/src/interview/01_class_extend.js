/**
 * [继承的6中方式](https://www.cnblogs.com/ranyonsue/p/11201730.html)
 * [详解js中的继承（一）](https://segmentfault.com/a/1190000008739672)
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
