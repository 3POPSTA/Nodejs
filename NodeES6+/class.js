//* Class Basics
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         return `Hello, I'm ${this.name}`;
//     }
// }
// const person = new Person("Mark",25);
// console.log(person.greet());


//* Class Inheritance
// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         return `${this.name} makes a sound.`;
//     }
// }

// class Dog extends Animal{
//     speak(){
//         return `${this.name} barks!`;
//     }
// }

// const dog = new Dog('Rex');
// console.log(dog.speak());


//* Private Class Fields
class Counter {
    #count = 0;
    
    increment(){
        this.#count++;
    }
    getCount(){
        return this.#count;
    }
}
const counter = new Counter();
counter.increment();
console.log(counter.getCount());
