let xxx={name:"xxx",age:0,gender:"x"};
// 第一种方法：for-in循环
function copy(insertXxx){
    let newXxx={};
    for(let i in insertXxx){
        newXxx[i]=insertXxx[i];
     }
     return newXxx;
}
const person1=copy(xxx);
person1.name="Martin";
person1.age=17;
person1.gender="male";
// 第二种方法：对象展开运算符拷贝
const person2={...xxx};
person2.name="Shunshun";
person2.age=18;
person2.gender="male";
// 第三种方法：Object.assign拷贝
const person3=Object.assign({},xxx);
person3.name="Yu";
person3.age=19;
person3.gender="male";

let arr=[];
arr.push(person1,person2,person3);
console.table(arr);