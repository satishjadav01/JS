//! What is Function ??
//* Block of code which is execude the specific task are also known as Function

//? There are some types of Fucntion like

//& Named Function
//& anonymounse Funtion
//& Function as Expression
//& Arrow Function
//& callback Function
//& IFFE Function
//&  HOF Function
//& Nested Function

//! Named Function :
//* give the name of function are also known as Named function
  
// function great() {
//     console.log('Hellow Satish');
// }
// great();

//! Anonymouse Function
//* The function don't have any name are called as anonymouse function

// (function () {
//     console.log('hii');
// })()

//! Function as Expression
//* The Function can store in the variable are known as Function as expression

// let result = () => {
//     console.log('hellow satish');
// }
// console.log(result());

//! Arrow Function
//* The Arrow Function short hand syntax to declare the function

// let res =  greetUser = (num1 , num2) => {
//     return num1 + num2 ;
// }
// console.log(res(10,20)); 

//! callback Function
//* The function pass another function as an argument are also known as callback Function

// function orderItem(item,callback) { 
//     console.log(`Ordering item ${item}`);

//     setTimeout(() => {
//         console.log(`${item} is ordered`);
//         callback()
//     }, 2000);
// }

// function eatFood() {
//     console.log(`eating food`);
// }
// orderItem("pizaa",eatFood)

//! IFFE Function
//* The IFFE Stand for immideatly invovek function as an expression
//* we can automatically called are known as IFFE function

// (function() {
//     console.log('Hessdsadsadsd');

// }())

//! HOF Function
//* The Function accept an other function and it return an other function are known as HOF function

// function clc(operation , num1 , num2) {
//     return operation(num1 , num2)
// } 

// function sum(num1 , num2) {
//     return num1 + num2
// }
// function sub(num1 , num2) {
//     return num1 - num2
// }
// console.log(clc(10,20,sum));
// console.log(clc(10,20,sub));

//! Nested Function
//* The function pass an other function are known as Nested function

// function inner() {
//   console.log("This is a inner function ");

//   function outer() {
//     console.log("This is a outer function");
//   }
//   outer()
// }
// inner();
