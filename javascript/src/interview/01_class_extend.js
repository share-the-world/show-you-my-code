/**
 * 组合寄生继承和继承的区别
 * https://www.cnblogs.com/pick7/p/5518212.html
 */
function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype); //创建超类型原型副本
    prototype.constructor = subType;          //修改原型副本的不同属性
    subType.prototype = prototype;           //指定原型
}
function SuperType(name) {
    this.name = name;
    this.colors = [];
}
SuperType.prototype.sayName = function () {
    console.log('name=',this.name);
}
function SubType(name, age) {
    //继承属性
    SuperType.call(this, name);
    //实例属性
    this.age = age;
}
//继承方法
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
    console.log('age=',this.age);
};
var zhangsan = new SubType("zhagngs an", 29);
zhangsan.colors.push("black");

console.log('colors=', zhangsan.colors); //"red, blue, green, black"
console.log('sayAge=',zhangsan.sayAge());      
console.log('sayName=',zhangsan.sayName());      