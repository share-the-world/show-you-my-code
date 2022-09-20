/**

 */

 // 父类
export function Person(name = 'zhangsan'){
    this.name = name;
    this.say = function(words = ''){
        console.log(`person say ${words}`)
    }
}
// 父类原型
Person.prototype.sex = '男/女'


// 子类
function Child(){
    this.age = 10;
    this.tellAge = function(){
        console.log(`child age is ${this.age}`)
    }
}

