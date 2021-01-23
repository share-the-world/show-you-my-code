import {Person} from './01_class_extend';

/**
 * 继承方式4：
 */

 function Student(person){
    function F(){}
    F.prototype = person;
    return new F();
 }

 // 测试：yarn run ts-node src/interview/01_extend_proptype4.js 
 var stu1 = new Student(new Person('xuesheng1'))
 console.log('name=',stu1.name);
 console.log('sex=',stu1.sex);