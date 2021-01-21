/**
 * 继承方式1：原型继承（子类的原型等于父类的实例）
 * 优点：简单粗暴
 * 缺点：
 * 1.子类构造函数的参数无法传递到父类
 * 2.无法读取父类原型里的属性
 */
// 父类
function Person(name = ''){
    this.name = name;
    this.say = function(words = ''){
        console.log(`person say ${words}`)
    }
}
// 子类
function Child(){
}
// 子类原型继承父类实例
Child.prototype = new Person();
// 子类具备的父类的属性，可以随意修改
Child.prototype.name = 'wuQilin'
Child.prototype.age = '-1'
// 子类实例化
var aChild = new Child('wuchao')

// 测试
console.log('aChild.name=',aChild.name)
console.log('aChild.age=',aChild.age)
console.log('type=',aChild instanceof Person)




