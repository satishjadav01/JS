//! 1. Reverse a string without using reverse()

// function reverseString(str) {
//     let rev = ""

//     for(char of str){
//         rev = char + rev
//     }
//     return rev
// }
// console.log(reverseString("satish"))

//! Check whether a string is a palindrome

// function isPalidrome(str) {
//     let rev = ""

//     for(char of str){
//          rev = char + rev
//     }
//     return str ===  rev
// }
// console.log(isPalidrome("nayan"));

//! Count vowels in a string

// function countVewels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for(char of str){
//         if(vowels.includes(char)){
//             count ++ 
//         }
//     }
//     return count;
// }
// console.log(countVewels("satish"));


//! Find the largest number in an array

// let nums = [10,20,30,40,50,60]

// let largestNum = Math.max(...nums);
// console.log(largestNum);

//!Find the smallest number in an array


// let nums = [10,20,30,40,50,60]

// let largestNum = Math.min(...nums);
// console.log(largestNum);

//! Find the second-largest number

// let num = [10,20,30,40,50,654,66]

// function secoundLargest(num) {
//     return [...new Set(num)].sort((a , b)=> b - a)[1]
// }
// console.log(secoundLargest(num));


//! Remove duplicates from an array

// let arr = [10,20,30,40,50,10,10,10,10,10]

// function removeDuplicate(str) {
//     return [...new Set(arr)]
// }
// console.log(removeDuplicate(arr));

// !Sum all numbers using reduce()

// let num = [10,20,30,40,60,50,70]

// let result = num.reduce((total , sum)=>{
//     return total + sum
// });
// console.log(result);

//! Merge two arrays

// let arr1 = [10,20,30]
// let arr2 = [40,50,60]

// let res = [...arr1,...arr2]
// console.log(res);

//! Find even and odd numbers

// let input = prompt("Enter The (Numbers ");
// let arr = input.split(",").map(Number)

// function evenOdd(arr) {
//     let even = arr.filter(num => num % 2 === 0)
//     let odd = arr.filter(num => num % 2 !== 0)

//     return{even , odd}
// }
// console.log(evenOdd(arr));
