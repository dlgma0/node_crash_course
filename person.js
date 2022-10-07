//这个exports, require 是因为有有一个wrapper function存在
// (function(exports,require,module,__filename,__dirname){

// });


// console.log(__dirname, __filename);

const person1 = {
    name:'John',
    age:30
}

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

// module.exports = person1;
// module.exports = Person;

exports.person1 = person1;
exports.Person = Person;

