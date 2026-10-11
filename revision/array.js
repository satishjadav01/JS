//! What is Array ? 
//* Array an object in Javascript
//* Array means collection multiple value store in single variable are known as array 

//^ There are 2 ways to create an Array  

// literal []

// let arr = [10,203,21,5,51,2]
// console.log(arr);

// new Array - ()

// let arr = new Array()
// console.log(arr);

//? Dynamic methods 

//& 1 push()
//& 2 pop()
//& 3 unshift()
//& 4 shift()
//& 5 indexOf()

//? static 

//& Map()
//& filter()
//& reduce()

//& map()
//* The map method used to change one element to interate every element are known an a map method it will return new array are known as map method  

// let arr = [10,20,30,40,50,60,70]
// let result = arr.map(num => num * 2);
// console.log(result);

// let name = ["satish","sanjay","kanu","Gajaraj"]

// let res = name.map(names => names.toUpperCase())
// console.log(res);

//! Fillter ()
//* Filter method which is used to filter the elemet to matching condition are know as filter()

// let nums = [10,20,30,40,50,60,900,925,956,1]
// let res = nums . filter(numss => numss % 2 == 0);
// console.log(res);

//! reduce ()
//* it will collect all element in store in single array and it will return new array 

// let arr  = [10,20,30,510,64]
// let sum = arr.reduce((total , sum)=>{
//     return total + sum
// })
// console.log(sum);

//! forEach 
//* which like loop throgth

// let arr = [10,20,30,40,50,60,70,80]
// arr.forEach((num)=>{
//     console.log(num);
// });

