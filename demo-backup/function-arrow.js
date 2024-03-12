const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const printMessage = message => console.log(`Logging: ${message}`)

printMessage("this is a test message")

// console.log(add(1, 2))




// class Person {
//     name = "Praveen";
//     age = 30;

//     sayHi(){
//         setTimeout(()=>{
//             console.log(`Hi from ${this.name}`)
//         }, 500)
//     }

//     sayHello(){
//         const _this = this
//         // console.log(this, "class")
//         setTimeout(function(){
//             // this
//             // console.log(this, "function");
//             console.log(`Hello from ${_this.name}`)
//         }, 500)
//     }
// }

// const user = new Person();
// user.sayHi()