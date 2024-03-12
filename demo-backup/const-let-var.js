let name = "praveen"

// const, let and var

var person = "Praveen";
person = "Amit";
console.log(person);

const user = "John";
// user = "Jim";
console.log(user);

let employee = "Amit";
employee = "Vinay";
console.log(employee);

// Scope
var a = "Example 1";
const b = "Example 2";
let c = "Example 3";

// for (var index = 0; index < 10; index++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 0);
//   })(index);
// }

// for (let index = 0; index < 10; index++) {
//     setTimeout(()=>{
//         console.log(index)
//     }, 0)
// }

// if(true) {
//     var aa = "Example 4";
//     const bb = "Example 5";
//     let cc = "Example 6";
// }

// aa = "Example 99"

// function abc() {
//   var aa = "Example 4";
//   const bb = "Example 5";
//   let cc = "Example 6";
//   console.log(aa, bb, cc, "Inside");
// }

// abc();

console.log(a, b, c, "Outside");
