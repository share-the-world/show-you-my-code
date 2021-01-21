import { Person } from './01_class_extend'

/**
 * 继承方式3：组合式继承（原型继承+call方法）
 * 优点：解决前两种方式的缺陷，既能读取父类构造里属性，也能读取父类原型里的属性
 * 缺点：子类实例化过程，调用了父类call()方法和父类实例，相当于调用两次父类构造，过于消耗内存
 * 
 */

// 子类
function Woman(name = '') {
    Person.call(this, name);// 1.先用call方法调用父类构造
}
// 2.再让子类原型指向父类实例
Woman.prototype = new Person();

// 测试：yarn run ts-node src/interview/01_extend_proptype3.js 
var aWoman = new Woman('fanjing');
// aWoman.age = 24;
console.log('name=',aWoman.name)
console.log('sex=',aWoman.sex)
