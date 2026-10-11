//! What is operators ?
//* Operator are nothing but we can perform the mathematic operation are also known as ..

//^ There are some types of operators like

//? Aerithmetic
//? assignment
//? comparition
//? ternary 
//? logical 
//? literal
//? concatination
//? Nulish Coalesicng Operator


//? Aerithmetic
//* perform the mathemetics task like addition , subsriptions , dived , multiplications etc 

// let a = 10;
// let b = 3 ;

//Types : 
//* Addition (+)
//* Subtraction (-)
//* Multiplication (*)
//* Division (/)
//* Modules (%)
//* Exponentiation (**)

// console.log(a+b);  // Addition
// console.log(a-b);  // subtration
// console.log(a*b); // moulphication
// console.log(a/b); // divider 
// console.log(a%b); // remainder of division 
// console.log(a**b); // raises one number to the power of an other 


//? 2) Assignment Operator : 
//* Assignment Operators assign values to variable 

// Types : 

//*  Simple Assignment (=)
//*  Addition Assignment (+=)
//*  Subtraction Assignment (-=)
//*  Multiplication Assignment (*=)
//*  Division Assignment (/=)
//*  Module Assignment (%=)

// let a = 2;
// a %= 3 ;

// console.log(a)

//? 3) Comparision Operator : 
//* These Operator compare two values and return a boolean result 

//* ==  (Equal to) 
//* === (Strict equal to)
//* !=  (Not equal to)
//* !==  ( strict Not equal to)
//* =>  (less then equal)
//* <=  (greater then eqaule)
//* >   (greater then)
//* <   (less then )

// console.log (5 === "5");
// console.log (5 === "5");
// console.log(5>5)
// console.log(5<5)
// console.log(5<=5)
// console.log(5>=5)
// console.log(5 != 5)
// console.log(5 !== 5)


//? 4) Logical Operator : 
//* The Logical Operator work with boolean values 
    
//* a) AND (&&)  Returns True if both operands are true
//* b) OR  (||)  Return True if at least one operand is true 
//* c) NOT (!)  val = True return False 
//* val = False return True 

console.log(true && false ) // false
console.log(true && true ) // true
console.log(true || false ) // false
console.log(!true ) // false

//? 5) Ternary Operator 

//* The Ternary Operator it is shorthand for if-else statement 

///* Syntax :  condition ? value_if_true : value_if_false 

// let age = 20 

// let canVote = age >= 18 ? "yes" : "No";
// console.log(canVote);

//? 6) comaa Operator (,)

//* it contain multiple operation and return the last value 

// let a = (1,2,3,65)
// console.log(a)

//? 7) String Concatenation Operator 

//* Which is used to combine to an other string 

// let firstname = "satish";
// let lastname = "jadav";
// console.log(firstname + " " + lastname);


//? 8) Nulish Coalesicng Operator (??)

//* Which is used to when first value is null or undefine the return default value 

// let name = null;
// let defaultname = "Guest"

// let result = name ?? defaultname ;
// console.log(result);
// 