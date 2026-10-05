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

//! count vowels

// function countVovels(str) {
    
//     let count = 0;
//     let vovels = 'aeiouAEIOU';

//     for(let char of str){
//         if(vovels.includes(char)){
//             count ++
//         }
//     }
//     return count
// }
// console.log(countVovels('satish'));


// function reversString(str) {
//     let rev = ""

//     for(let char of str){
//         rev = char + rev;
//     }
//     return rev
// }
// console.log(reversString("satish"))


// remove duplicates from array 

// let number = [10,20,30,10,10,20,23,20,20]
// function removeDuplicates(arr) {
//     return [...new Set(arr)]
// }
// console.log(removeDuplicates(number));


// largest number 

// let arr = [10,20,30,10,20,56,30]

// let res = [...new Set(arr)].sort((a,b)=>(b-a))
// console.log(res[3]);

//! sum number using reduce 

// let arr = [10,20]

// function sumNumbers() {
//     return arr.reduce((sum , num)=>{
//         return sum + num
//     })
// }
// console.log(sumNumbers(arr));



//! reverse string 

// function reverseString(str) {
//     let rev = ""

//     for(char of str){
//         rev = char + rev
//     }
//     return rev
// }
// console.log(reverseString("satish"))

//! palidrome or not 

// function isPalidrome(str) {
//     return str === str.split("").reverse("").join("")
// }
// console.log(isPalidrome("satish"));


//!Count vowels in a string

// function countVovels(str) {
//     let count = 0;
//     let vovels = 'aeiouAEIOU'

//     for(let char of str){
//         if(vovels.includes(char)){
//             count ++
//         }
//     }
//     return count
// }
// console.log(countVovels("satish"));

//! Find the largest number in an array

// let arr = [10,20,30,56,10,21]

// let largest = Math.max(...arr)
// console.log(largest);


//! Find the smallest number in an array

// let arr = [10,20,30,40,50,65,20]

// let smallestNumber = Math.min(...arr)
// console.log(smallestNumber);

//! Find the secound largest number in an array

// let arr = [10,20,30,40,50,65]

// function secoundLargest() {
//     return [...new Set(arr)].sort((a , b)=> b - a )[1]
// }
// console.log(secoundLargest(arr));

//! Remove duplicates from an array

// let arr = [10,20,30,56,48,98,71]

// function removeDuplicate(arr) {
//     return [...new Set(arr)]
// }
// console.log(removeDuplicate(arr));


//! Sum all numbers using reduce()

// let arr = [10,20,30,24,65]

// function sumArray () {
//     return arr.reduce((sum,num)=>{
//         return sum + num
//     })
// }
// console.log(sumArray(arr))

//! EvenOdd 

let input = prompt("Enter The Number : ")
let arr = input.split(',').map(Number);

function findEvenOdd(arr) {
    let even = arr.filter(num => num % 2 === 0);
    let odd = arr.filter(num => num % 2 !== 0);

    return {even,odd}
}
console.log(findEvenOdd(arr));



