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


//! Explain map() vs filter() vs reduce()

//? map()
//* chage one element and intreat every element are known as map() method 

// let num = [10,20,30,40,50,60]

// let res = num.map(nums => nums * 2);
// console.log(res);

// let names = ["user1","user2","user3"]

// let users = names.map(allUsers => allUsers.toUpperCase());
// console.log(users);

//? filter();
//* the filter the Elements matching conditions based are also known as filter.

// let evenOdd = [10,5,6,56,7,7,2,3,5]

// let number = evenOdd.filter(num => num%2 == 0);
// console.log(number);

//? reduce(); 

//! the reduce method which is used to combine every element and give final value

// let numbers = [10,20,30,40,50,60,4]

// let result = numbers.reduce((total,sum)=>{
//     return total + sum;
// })
// console.log(result);

//? forEach()
//* the forEach loop throught

// let arr = [10,20,30,50,40,5,65]

// let result = arr.forEach((arr)=>{
//     console.log(arr);  
// })

//! what is async ? 
//* async await which is used to handle asynocronouse operation in javascript

// function fetchUserdata() {
//     try {
//         let response = fetch("https://jsonplaceholder.typicode.com/users")
    
//         let data = response.json()
//         console.log(data.json);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// fetchUserdata()

