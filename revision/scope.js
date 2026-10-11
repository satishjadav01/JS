//! What is Scope ? 
//* scope me visibility and accessbilities in js are also known as scope 

//^ There are some types of scope 

//? globel scope
//? local scope
//? block scope 
//? module scope 
//? script scope
//? local and functional scope

//? globel scope
//* we can access the variable from any where are also known as globle scope
// var num = 10;
// console.log("num:",num);

//? local scope
//* the variable which is declare with var,let and const are location to function 

// function LocalFunc(){
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log("a:",a)
//     console.log("b:",b)
//     console.log("c:",c)
// }
// LocalFunc();

//? Block Scope
//* that means access the var and value from block not a anywhere 

// {
//     var num3 = 50
//     let num1= 10;
//     const num2 = 30;
//     console.log("num1:",num1)
//     console.log("num2:",num2)
//     console.log("num3:",num3)
// }

//? script scope
//* that means declare with js file are also known as script scope
// let x = 100;
// const y = 200;
// console.log("x:",x);
// console.log("y:",y);
