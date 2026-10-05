//! Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".


// function stringToNumber(number) {
//     let number = Number(input);

//     if(NaN(number)){
//         return "Not a Number "
//     }
//     return number
// }


//! Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
    return !Boolean(input);
}

//! Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
    if (typeof input === "number") return "I'm a number!";
    if (typeof input === "string") return "I'm a string!";
}


//! Write a function `isItTruthy` that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
} 
  

// Perform the following mathematical operations
// on the provided variables a and b

// let a = 10;
// let b = 20;

// console.log(a + b);  // 30
// console.log(a - b);  // -10
// console.log(a / b);  // 0.5
// console.log(a * b);  // 200
// console.log(a % b);  // 10
// console.log(a ** b); // 100000000000000000000


// Write a function filterNumbers(arr) that returns only numbers from a mixed array

// let arr = ["satish",10,20,30]

// function filterNumber(arr) {
//     return arr.filter(item => typeof item === "number");
// }
// console.log(filterNumber(arr))


//! Write a function reverseArray(arr) that reverses the array

// let number = [10, 20, 0, 40, 50];

// function reverseArra(number) {
//     return number.reverse();
// }

// console.log(reverseArra(number));


//! Write a function findMax(arr) that returns the largest number in the array

// let number = [10, 20, 30, 50, 40];

// function maxArray(number) {
//     return Math.max(...number);
// }

// console.log(maxArray(number));

//! Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

// let numbers = [10, 20, 30, 50, 60, 41, 25, 20, 30];

// function removeDuplicate() {
//     return [...new Set(numbers)];
// }

// let res = removeDuplicate(numbers)
// console.log(res);


//! remove dublicate 
// let number = [10,20,20,30,65,845,41,41]

// function removeDuplicate(arr) {
//     return [...new Set(arr)]
// }

// console.log(removeDuplicate(number));

//! Task 1: Sum of First N Natural Numbers

// function sumOf(n) {
//     let sum = 0;

//     for (let i = 0 ; i<=n; i++){
//         sum += i;
//     }
//     return sum
// }
// console.log(sumOf(10))


// function multiplicationTable(n) {
//     const table = []; 

//     for(let i = 0 ; i<=10 ; i++){
//         table.push(`${i} * ${n} = ${i * n}`)
//     }
//     return table
// }
// console.log(multiplicationTable(5))


