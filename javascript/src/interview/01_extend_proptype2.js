import {Person} from './01_class_extend'


/**
 * 继承方式2:构造方式继承（在子类中使用call()方法调用父类的构造）
 * 
 * 缺点：
 * 1.每次实例化子类，都要调用一次父类
 * 2.无法调用父类的原型（只能继承父类构造函数中的属性）
 */
// 子类
function Gentalman(name = ''){
    // call方法可以调用父类的构造函数
    Person.call(this,name)
}


// 测试：yarn run ts-node src/interview/01_extend_proptype2.js 
var man1 = new Gentalman('张三')
console.log('name=',man1.name);
console.log('sex=',man1.sex) // undefined，无法读取