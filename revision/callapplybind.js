//! Call()
//* which is used to borrow the logic and pass dynamic object are known as call method 

// method.call(thisArg)

// let person1 = {
//     username = "sita"
// }

// let person2 = {
//     username = "jaya"
// }  

// function printName() {
//     console.log(`Hellow , ${this.username} !`);
// }
// printName.call(person1)

//! Appy()
//* work same as call but accept the multiple argument are knwon as appy 
//? method.apply(thisArg,[arg1,arg2 .... argN])

// let user1 = {
//     username : "Chintu",
// };

// let user2 = {
//     username: "Montu",
// };

// function printDetails(city,address) {
//     console.log(`User Details : ${this.username} ! city ${city} and living in ${address}`);
// }
// printDetails.apply(user1,["una","gani market"])

//! 3.bind() method:
//* The bind() method is used to handle the 'this' keyword behaviour but it will not invoke or called immediately instead of it will return the function 

//? Synatax : methodName.bind(thisArg)

// let userInfo = printDetails.bind(user1);
// userInfo("Ahm","in");;