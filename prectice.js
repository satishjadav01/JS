console.log('Hellow world! ')

//! Reverse a string without using reverse()

// function reverseString(str) {
//     let rev = ""

//     for(let char of str){
//         rev = char + rev
//     }
//     return rev ;
// }
// console.log(reverseString('satish'));

//! Check whether a string is a palindrome

// function isPalidrome(str) {
//     let rev = ""

//     for(let char of str){
//         rev = char + rev 
//     }
//     return str === rev
// }
// console.log(isPalidrome('satish'));

//! Count vowels in a string

// function countVovels(str) {
//     let count = 0;
//     let vovels = 'aeiouAEIOU'

//     for(char of str){
//         if(vovels.includes(char)){
//             count ++ 
//         }
//     }
//     return count
// }
// console.log(countVovels('satish'))


//! Find the largest number in an array

// let arr = [10,20,30,40,50,65]
// let largest = Math.max(...arr)
// console.log(largest);

//! Find the smallest number in an array

// let arr = [10,20,30,40,50,65]
// let secoundLargest = Math.min(...arr)
// console.log(largest);

// let arr = [10,20,30,40,50,65]
// let largest = Math.max(...arr)
// console.log(largest);

//! Find the secound largest number in an array

// let arr = [10,20,30,54,68,10,20]

// function secoundLargest(str) {
//     return [...new Set(arr)].sort((a,b)=>b-a)[1]
// }
// console.log(secoundLargest(arr))
