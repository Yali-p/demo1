// 第一种：使用Object()构造函数创建
let person=new Object();
person.name='Martin';
person.age=17;
person.gender='male'
person.height=190;
person.nationality="Canada and Korea";
console.log(person);

// 第二种：使用对象字面量创建
let person2={
    name: 'Martin',
    age:17,
    gender:'male',
    height:190,
    nationality:"Canada and Korea"
}
console.log(person);

// 第三种：使用构造函数创建对象
function Person3(){
    this.name='Martin';
    this.age=17;
    this.gender='male';
    this.height=190;
    this.nationality='Canada and Korea'
}
let p=new Person3();
console.log(p);